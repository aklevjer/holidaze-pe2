import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .regex(/^[\w\-.]+@stud\.noroff\.no$/, "Please enter a valid @stud.noroff.no email"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
