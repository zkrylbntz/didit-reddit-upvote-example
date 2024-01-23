import { db } from "@/db";

export default async function SinglePostPage({ params }) {
  const postId = params.postId;

  const { rows: posts } = await db.query("SELECT * FROM posts WHERE id = $1", [
    postId,
  ]);

  const post = posts[0];

  return (
    <div>
      Im, a post with id {post.id} - {post.title}
    </div>
  );
}
