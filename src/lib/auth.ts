import { getUserById } from "@/repositories/user";
import { loginScheme } from "@/scheme/auth/login-scheme";
import { compareSync } from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const creds = loginScheme.safeParse(credentials);

          if (!creds.success) return null;

          const { username, password } = creds.data;
          const user = await db.user.findFirst({ where: { username } });
          if (!user) return null;

          const isValid = compareSync(password, user.password);
          if (!isValid) return null;

          return user as any;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      const user = await getUserById(parseInt(token.sub!));
      if (!user) return session;
      const { password: _, ...authed } = user;
      return {
        ...session,
        user: { ...authed, id: user.id as unknown as string },
      };
    },
  },
});
