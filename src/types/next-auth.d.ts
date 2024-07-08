import { User as UserType } from "@prisma/client";
import "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
  }

  interface Session {
    user: UserType;
  }
}
