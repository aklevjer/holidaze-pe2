import { z } from "zod";

export const bookingSchema = z.object({
  dateFrom: z.string().min(1, "Please select dates"),
  dateTo: z.string().min(1, "Please select an end date"),
  guests: z.coerce.number().min(1),
  venueId: z.string().uuid(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
