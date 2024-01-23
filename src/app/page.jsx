import { auth } from "@/auth";
import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  // const { rows: posts } = await db.query("SELECT * FROM posts");
  const { rows: posts } =
    await db.query(`SELECT posts.id, posts.title, posts.body, posts.created_at, users.name
      FROM posts
      JOIN users ON posts.user_id = users.id
      ORDER BY posts.created_at DESC
      LIMIT 10`);

  return (
    <ul className="max-w-screen-lg mx-auto">
      {posts.map((post) => (
        <li key={post.id} className=" py-4 border-b border-zinc-800">
          <Link
            href={`/post/${post.id}`}
            className="text-3xl underline hover:text-pink-500"
          >
            {post.title}
          </Link>
          <p className="text-zinc-400">posted by {post.name}</p>
        </li>
      ))}
    </ul>
  );
}
