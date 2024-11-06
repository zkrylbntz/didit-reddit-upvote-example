import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function DeleteButton({ params }) {
  const myParams = await params;

  async function handleDelete() {
    "use server";

    await db.query(`DELETE FROM posts WHERE id = ${myParams.id} `);

    revalidatePath("/post");

    redirect("/");
  }

  return (
    <form action={handleDelete} className="inline">
      <button className="bg-pink-300 text-black px-3 py-2 rounded">
        Delete
      </button>
    </form>
  );
}
