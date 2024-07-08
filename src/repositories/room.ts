import db from "@/lib/db";
import { Prisma } from "@prisma/client";

export const totalUserRoom = async (userId: number) => {
  return await db.room.count({ where: { userId } });
};

export const isRoomWithUserExists = async (userId: number, roomId: number) => {
  const count = await db.room.count({ where: { id: roomId, userId } });
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

export const editRoomUser = async (
  roomId: number,
  data: Prisma.RoomUpdateInput
) => {
  return await db.room.update({ where: { id: roomId }, data });
};

export const deleteRoom = async (roomId: number) => {
  return await db.room.delete({ where: { id: roomId } });
};

export const setRoomActive = async (roomId: number, isActive: boolean) => {
  return await db.room.update({
    where: { id: roomId },
    data: { isActive },
  });
};

export const getRoomBySlugActive = async (slug: string) => {
  return await db.room.findFirst({
    where: { slug, isActive: true },
  });
};
