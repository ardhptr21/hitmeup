"use server";

import { safeAction } from "@/lib/safe-action";
import { createMessage } from "@/repositories/message";
import { sendMessageScheme } from "@/scheme/message/send-message-scheme";
import { z } from "zod";

export const sendMessageAction = safeAction
  .schema(sendMessageScheme.extend({ roomId: z.number() }))
  .action(async ({ parsedInput: { roomId, message } }) => {
    try {
      await createMessage(roomId, message);
    } catch {
      throw new Error("Failed to send message");
    }
  });
