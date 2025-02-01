import { Booking } from "@/types/booking";

export const formatBookings = (bookings: Booking[]) => {
  return bookings.map((booking) => {
    const startDate = new Date(booking.dateFrom);
    const endDate = new Date(booking.dateTo);

    startDate.setUTCHours(0, 0, 0, 0);
    endDate.setUTCHours(0, 0, 0, 0);

    startDate.setUTCDate(startDate.getUTCDate() - 1);

    return { start: startDate, end: endDate };
  });
};
