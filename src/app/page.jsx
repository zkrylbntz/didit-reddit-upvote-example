import { auth } from "@/auth";
import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";
import { db } from "@/db";
import Link from "next/link";
import { Vote } from "./components/Vote";

export default async function Home() {
  // just posts
  // const { rows: posts } = await db.query("SELECT * FROM posts");

  // posts and username
  // const { rows: posts } =
  //   await db.query(`SELECT posts.id, posts.title, posts.body, posts.created_at, users.name
  //     FROM posts
  //     JOIN users ON posts.user_id = users.id
  //     ORDER BY posts.created_at DESC
  //     LIMIT 10`);

  // posts, username, and votes
  const { rows: posts } =
    await db.query(`SELECT posts.id, posts.title, posts.body, posts.created_at, users.name, 
    COALESCE(SUM(votes.vote), 0) AS vote_total
     FROM posts
     JOIN users ON posts.user_id = users.id
     LEFT JOIN votes ON votes.post_id = posts.id
     GROUP BY posts.id, users.name
     ORDER BY vote_total DESC
     LIMIT 5`);

  return (
    <ul className="max-w-screen-lg mx-auto p-4">
      {posts.map((post) => (
        <li key={post.id} className=" py-4 border-b border-zinc-800">
          <Link
            href={`/post/${post.id}`}
            className="text-3xl underline hover:text-pink-500"
          >
            {post.title}
          </Link>
          <p className="text-zinc-400">posted by {post.name}</p>
          <Vote postId={post.id} votes={post.vote_total} />
        </li>
      ))}
    </ul>
  );
}
