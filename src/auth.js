import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
export const { auth, handlers, signOut, signIn } = NextAuth({
  providers: [GitHub],
});
