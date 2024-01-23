import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { LoginButton } from "../components/LoginButton";
import { LogoutButton } from "../components/LogoutButton";

export default async function Home() {
  const session = await auth();

  async function savePost(formData) {
    "use server";
    const content = formData.get("content");
    const title = formData.get("title");
    const userId = session?.user?.id;
    if (!userId) {
      throw new Error("You need to login");
    }

    await db.query(
      "INSERT INTO posts (title, body, user_id) VALUES ($1, $2, $3)",
      [title, content, userId]
    );

    revalidatePath("/");
    redirect("/");
  }

  if (!session) {
    return (
      <div>
        You need to login to create a post <LoginButton />
      </div>
    );
  }
  return (
    <div>
      You logged in, {session.user.name}! <LogoutButton />
      <form action={savePost}>
        <input
          type="text"
          name="title"
          placeholder="Post title..."
          className="text-black"
        />
        <textarea
          name="content"
          className="text-black"
          placeholder="Post content"
        />
        <button>Submit post</button>
      </form>
    </div>
  );
}
