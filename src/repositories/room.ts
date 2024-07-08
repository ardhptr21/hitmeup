import db from "@/lib/db";

export const totalUserRoom = async (userId: number) => {
  return await db.room.count({ where: { userId } });
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
  });
};

export const detailUserRoom = async (userId: number, roomId: number) => {
  return await db.room.findFirst({
    where: { userId, id: roomId },
  });
};
