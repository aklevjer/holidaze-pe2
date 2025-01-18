import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Your name must be at least 3 characters"),
  email: z
    .string()
    .regex(/^[\w\-.]+@stud\.noroff\.no$/, "Please enter a valid @stud.noroff.no email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(3, "Message must be at least 3 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
