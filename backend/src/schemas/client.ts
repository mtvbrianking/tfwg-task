import { z } from 'zod';

export const clientSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    gender: z.enum(['Male', 'Female']),
    image: z.string().url().optional(),
}).strict();
