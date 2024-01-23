import { signIn } from "@/auth";

export function LoginButton() {
  async function handleLogin() {
    "use server";
    await signIn();
  }

  return (
    <form action={handleLogin}>
      <button>Login</button>
    </form>
  );
}
