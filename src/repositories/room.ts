import db from "@/lib/db";
import { Prisma } from "@prisma/client";

export const totalUserRoom = async (userId: number) => {
  return await db.room.count({ where: { userId } });
};

export const isRoomExists = async (roomId: number) => {
  const count = await db.room.count({ where: { id: roomId } });
  return count > 0;
};

export const getUserRooms = async (userId: number) => {
  return await db.room.findMany({
    where: { userId },
    select: {
      id: true,
      title: true,
      slug: true,
      isActive: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
};

export const detailUserRoom = async (userId: number, roomId: number) => {
  return await db.room.findFirst({
    where: { userId, id: roomId },
  });
};

export const newRoom = async (data: Prisma.RoomCreateInput) => {
  return await db.room.create({ data });
};
