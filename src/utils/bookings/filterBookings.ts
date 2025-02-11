import { Booking } from "@/types/booking";

/**
 * Filters out bookings that are in the past, returning only upcoming bookings.
 *
 * @param bookings - An array of bookings to filter.
 * @returns An array of bookings that are scheduled for the future.
 */
export const filterUpcomingBookings = (bookings: Booking[]) => {
  const dateNow = new Date();
  dateNow.setHours(0, 0, 0, 0);
  return bookings.filter((booking) => new Date(booking.dateFrom) > dateNow);
};
