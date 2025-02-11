import { Booking } from "@/types/booking";

/**
 * Sorts a list of bookings by the `dateFrom` field in ascending order.
 *
 * @param bookings - An array of bookings to be sorted.
 * @returns A new array of bookings sorted by the `dateFrom` field.
 */
export const sortBookingsByDate = (bookings: Booking[]) => {
  return [...bookings].sort((a, b) => {
    const dateA = new Date(a.dateFrom);
    const dateB = new Date(b.dateFrom);
    return dateA.getTime() - dateB.getTime();
  });
};
