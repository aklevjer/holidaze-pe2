import { Booking } from "@/types/booking";

export const sortBookingsByDate = (bookings: Booking[]) => {
  return [...bookings].sort((a, b) => {
    const dateA = new Date(a.dateFrom);
    const dateB = new Date(b.dateFrom);
    return dateA.getTime() - dateB.getTime();
  });
};
