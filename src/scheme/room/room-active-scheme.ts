import { z } from "zod";

export const roomActiveScheme = z.object({
  userId: z.number(),
  roomId: z.number(),
  isActive: z.boolean(),
});

export type RoomActiveScheme = z.infer<typeof roomActiveScheme>;
