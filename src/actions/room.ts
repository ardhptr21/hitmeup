"use server";

import { safeAction } from "@/lib/safe-action";
import {
  deleteRoom,
  editRoomUser,
  isRoomWithUserExists,
  newRoom,
} from "@/repositories/room";
import { deleteRoomScheme } from "@/scheme/room/delete-room-scheme";
import { editRoomScheme } from "@/scheme/room/edit-room-scheme";
import { newRoomScheme } from "@/scheme/room/new-room-scheme";
import { roomActiveScheme } from "@/scheme/room/room-active-scheme";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const newRoomAction = safeAction
  .schema(newRoomScheme)
  .bindArgsSchemas<[userId: z.ZodNumber]>([z.number()])
  .action(async ({ parsedInput, bindArgsParsedInputs: [userId] }) => {
    try {
      await newRoom({ userId, ...parsedInput });
      revalidatePath("/panel/room");
    } catch (error) {
      throw new Error("Failed to create room, please try again later.");
    }
  });

export const editRoomAction = safeAction
  .schema(editRoomScheme)
  .bindArgsSchemas<[userId: z.ZodNumber, roomId: z.ZodNumber]>([
    z.number(),
    z.number(),
  ])
  .action(async ({ parsedInput, bindArgsParsedInputs: [userId, roomId] }) => {
    try {
      const roomExists = await isRoomWithUserExists(userId, roomId);
      if (!roomExists) throw new Error("Room not found.");
      await editRoomUser(roomId, parsedInput);

      revalidatePath(`/panel/room/${roomId}`);
    } catch {
      throw new Error("Failed to edit room, please try again later.");
    }
  });

export const deleteRoomAction = safeAction
  .schema(deleteRoomScheme)
  .action(async ({ parsedInput: { userId, roomId } }) => {
    try {
      const roomExists = await isRoomWithUserExists(userId, roomId);
      if (!roomExists) throw new Error("Room not found.");
      await deleteRoom(roomId);

      revalidatePath("/panel/room");
    } catch {
      throw new Error("Failed to delete room, please try again later.");
    }
  });

export const setRoomActiveAction = safeAction
  .schema(roomActiveScheme)
  .action(async ({ parsedInput: { userId, roomId, isActive } }) => {
    try {
      const roomExists = await isRoomWithUserExists(userId, roomId);
      if (!roomExists) throw new Error("Room not found.");
      await editRoomUser(roomId, { isActive });

      revalidatePath(`/panel/room/${roomId}`);
    } catch {
      throw new Error("Failed to set room active, please try again later.");
    }
  });
