import { db } from "@/db";
import auth from "../app/middleware";
import { revalidatePath } from "next/cache";
import { VoteButton } from "./VoteButton";

async function getExistingVote(userId, postId) {
  const { rows: existingVotes } = await db.query(
    "SELECT * FROM votes WHERE user_id = $1 AND post_id = $2 LIMIT 1",
    [userId, postId]
  );

  return existingVotes?.[0];
}

async function handleVote(userId, postId, newVote) {
  // Check if the user has already voted on this post
  const existingVote = await getExistingVote(userId, postId);

  if (existingVote) {
    if (existingVote.vote === newVote) {
      // User is toggling their vote, so remove it
      await db.query("DELETE FROM votes WHERE id = $1", [existingVote.id]);
    } else {
      // Update the existing vote
      await db.query("UPDATE votes SET vote = $1 WHERE id = $2", [
        newVote,
        existingVote.id,
      ]);
    }
  } else {
    // Insert a new vote
    await db.query(
      "INSERT INTO votes (user_id, post_id, vote, vote_type) VALUES ($1, $2, $3, 'post')",
      [userId, postId, newVote]
    );
  }
}

export async function Vote({ postId, votes }) {
  const session = await auth();

  const existingVote = await getExistingVote(session.user.id, postId);

  async function upvote() {
    "use server";
    console.log("Upvote", postId, "by user", session.user.id);

    await handleVote(session.user.id, postId, 1);

    // revalidatePath("/");
    revalidatePath(`/post/${postId}`);
  }

  async function downvote() {
    "use server";
    console.log("Downvote", postId, "by user", session.user.id);

    await handleVote(session.user.id, postId, -1);

    // revalidatePath("/");
    revalidatePath(`/post/${postId}`);
  }

  return (
    <>
      {votes} votes
      <div className="flex space-x-3">
        <form action={upvote}>
          <VoteButton label="Upvote" isActive={existingVote?.vote === 1} />
        </form>
        <form action={downvote}>
          <VoteButton label="Downvote" isActive={existingVote?.vote === -1} />
        </form>
      </div>
    </>
  );
}
