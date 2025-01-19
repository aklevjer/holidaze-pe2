import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .regex(/^[\w\-.]+@stud\.noroff\.no$/, "Please enter a valid @stud.noroff.no email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
