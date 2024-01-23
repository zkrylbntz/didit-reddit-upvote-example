import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import PostgresAdapter from "next-auth/providers/pg-adapter";
import { Pool } from "pg";

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const { auth, handlers, signOut, signIn } = NextAuth({
  adapter: PostgresAdapter(db),
  providers: [GitHub],
});
