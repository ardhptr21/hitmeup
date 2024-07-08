import { z } from "zod";

export const deleteRoomScheme = z.object({
  userId: z.number(),
  roomId: z.number(),
});

export type DeleteRoomScheme = z.infer<typeof deleteRoomScheme>;
