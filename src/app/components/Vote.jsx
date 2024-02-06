import { db } from "@/db";
import auth from "../middleware";
import { revalidatePath } from "next/cache";
import { VoteButton } from "./VoteButton";

export async function Vote({ postId, votes }) {
  const session = await auth();

  async function upvote() {
    "use server";
    console.log("Upvote", postId, "by user", session.user.id);
    await db.query(
      "INSERT INTO votes (user_id, post_id, vote, vote_type) VALUES ($1, $2, $3, $4)",
      [session.user.id, postId, 1, "post"]
    );

    revalidatePath("/");
  }

  async function downvote() {
    "use server";
    console.log("Downvote", postId, "by user", session.user.id);
    await db.query(
      "INSERT INTO votes (user_id, post_id, vote, vote_type) VALUES ($1, $2, $3, $4)",
      [session.user.id, postId, -1, "post"]
    );

    revalidatePath("/");
  }

  return (
    <div>
      {votes} votes
      <form action={upvote}>
        <VoteButton label="Upvote" />
      </form>
      <form action={downvote}>
        <VoteButton label="Downvote" />
      </form>
    </div>
  );
}
