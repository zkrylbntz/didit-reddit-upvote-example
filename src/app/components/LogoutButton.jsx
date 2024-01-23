import { signOut } from "@/auth";

export function LogoutButton() {
  async function handleLogout() {
    "use server";
    await signOut();
  }

  return (
    <form action={handleLogout}>
      <button>Logout</button>
    </form>
  );
}
