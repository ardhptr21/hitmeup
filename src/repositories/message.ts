import db from "@/lib/db";

export const getMessagesByRoom = async (roomId: number) => {
  return await db.message.findMany({
    where: { roomId },
    select: { id: true, text: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });
};

export const createMessage = async (roomId: number, text: string) => {
  return await db.message.create({
    data: { roomId, text },
  });
};
