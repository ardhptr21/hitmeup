import { z } from "zod";

export const loginScheme = z.object({
  username: z.string().min(1),
  password: z.string().min(8),
});

export type LoginScheme = z.infer<typeof loginScheme>;
