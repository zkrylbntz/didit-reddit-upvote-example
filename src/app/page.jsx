import { auth } from "@/auth";
import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";

export default async function Home() {
  const session = await auth();
  console.log("session", session);

  async function savePost(formData) {
    "use server";

    if (session) {
      const content = formData.get("content");
      console.log("content", content, "by user", session.user.name);
    }
  }

  if (session) {
    return (
      <div>
        You logged in, {session.user.name}! <LogoutButton />
        <form action={savePost}>
          <textarea name="content" className="text-black" />
          <button>Submit post</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      You need to login <LoginButton />
    </div>
  );
}
