import { Booking } from "@/types/booking";

/**
 * Formats the bookings to adapt to React Datepicker's range selection.
 *
 * @param bookings - An array of bookings to format.
 * @returns An array of formatted bookings for use with React Datepicker.
 */
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
