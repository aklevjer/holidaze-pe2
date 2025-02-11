import { getNightCount } from "@/utils/bookings/getNightCount";

/**
 * Calculates the total price for a booking.
 *
 * @param startDate - The start date of the booking, either a `Date` object or an ISO string.
 * @param endDate - The end date of the booking, either a `Date` object or an ISO string.
 * @param price - The price per night.
 *
 * @returns The total price for the booking.
 */
export const getTotalPrice = (startDate: Date | string, endDate: Date | string, price: number) => {
  const dateFrom = new Date(startDate);
  const dateTo = new Date(endDate);

  const nightCount = getNightCount(dateFrom, dateTo);
  return Math.round(nightCount * price);
};
