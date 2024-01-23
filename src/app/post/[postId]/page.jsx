import { db } from "@/db";

export default async function SinglePostPage({ params }) {
  const postId = params.postId;
  // await db.query(`SELECT posts.id, posts.title, posts.body, posts.created_at, users.name
  //       FROM posts
  //       JOIN users ON posts.user_id = users.id
  //       ORDER BY posts.created_at DESC
  //       LIMIT 10`);
  const { rows: posts } = await db.query(
    "SELECT * FROM posts JOIN users ON posts.user_id = users.id WHERE posts.id = $1",
    [postId]
  );

  const post = posts[0];

  return (
    <div className="max-w-screen-lg mx-auto pt-10">
      <h1 className="text-2xl">{post.title}</h1>
      <p className="text-zinc-400 border-b border-zinc-800 mb-4">
        Posted by {post.name}{" "}
      </p>
      <main className="whitespace-pre-wrap">{post.body}</main>
    </div>
  );
}
