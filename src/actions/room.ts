"use server";

import { safeAction } from "@/lib/safe-action";
import { newRoom } from "@/repositories/room";
import { newRoomScheme } from "@/scheme/room/new-room-scheme";
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
