import { db } from "@/db";

export default async function ProfilePage({ params }) {
  const userId = params.userId;

  const user_profile = await db.query(
    `SELECT * FROM users WHERE users_id = {params.id}`
  )[userId];
  const profile = user_profile[0];

  return (
    <>
      <h1>Profile Page</h1>
      <div>
        <h1>{profile.name}</h1>
        <h1>{profile.email}</h1>
        <h1>{profile.image}</h1>
      </div>
    </>
  );
}
