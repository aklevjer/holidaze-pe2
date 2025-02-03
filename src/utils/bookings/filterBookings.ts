import { Booking } from "@/types/booking";

export const filterUpcomingBookings = (bookings: Booking[]) => {
  const dateNow = new Date();
  dateNow.setHours(0, 0, 0, 0);
  return bookings.filter((booking) => new Date(booking.dateFrom) > dateNow);
};
