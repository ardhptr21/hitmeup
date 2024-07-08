import { z } from "zod";

export const newRoomScheme = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(300),
  slug: z
    .string()
    .min(1)
    .max(150)
    .regex(/^[a-z](-?[a-z])*$/, "Slug must be a valid slug, e.g. 'my-room'"),
  isActive: z.boolean(),
});

export type NewRoomScheme = z.infer<typeof newRoomScheme>;
