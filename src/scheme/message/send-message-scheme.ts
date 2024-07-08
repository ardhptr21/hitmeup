import { z } from "zod";

export const sendMessageScheme = z.object({
  message: z.string().min(1).max(300),
  roomId: z.number(),
});

export type SendMessageScheme = z.infer<typeof sendMessageScheme>;
