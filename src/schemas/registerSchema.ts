import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, "Username is required")
    .regex(/^\w+$/, "Use only letters, numbers, and underscores")
    .max(20, "Username cannot be longer than 20 characters"),
  email: z
    .string()
    .regex(/^[\w\-.]+@stud\.noroff\.no$/, "Please enter a valid @stud.noroff.no email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  venueManager: z.boolean(),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
