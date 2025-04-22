import { z } from "zod"

export const clientSchema = z.object({
  id: z.number(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  gender: z.string(),
  image: z.string().url().optional(),
}).strict();

export type Client = z.infer<typeof clientSchema>
