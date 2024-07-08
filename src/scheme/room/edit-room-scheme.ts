import { z } from "zod";
import { newRoomScheme } from "./new-room-scheme";

export const editRoomScheme = newRoomScheme.omit({ isActive: true });

export type EditRoomScheme = z.infer<typeof editRoomScheme>;
