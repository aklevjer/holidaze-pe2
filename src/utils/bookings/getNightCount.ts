/**
 * Calculates the number of nights between two dates.
 *
 * @param startDate - The start date of the booking.
 * @param endDate - The end date of the booking.
 *
 * @returns The number of nights between the start and end date, or 1 if the difference is less than 1 day.
 */
export const getNightCount = (startDate: Date, endDate: Date) => {
  const timeDifference = endDate.getTime() - startDate.getTime();
  const nightCount = timeDifference / (1000 * 60 * 60 * 24);

  return Math.max(1, Math.floor(nightCount));
};
