import db from "@/lib/db";

export const getUserById = async (id: number) => {
  return await db.user.findFirst({ where: { id } });
};
