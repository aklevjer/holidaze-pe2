/**
 * Checks if a date is available for selection based on previously booked date ranges.
 * Used to prevent selecting dates that would overlap with existing bookings.
 *
 * @param date - The date to check for availability.
 * @param bookedDates - An array of booked date ranges.
 * @param startDate - The currently selected start date, or `null` if all dates are available for selection.
 *
 * @returns A boolean indicating whether the date is available.
 */
export const isDateAvailable = (
  date: Date,
  bookedDates: { start: Date; end: Date }[],
  startDate: Date | null,
) => {
  if (!startDate) return true;
  const nextBookedDate = bookedDates.find((range) => range.start > startDate);
  return !nextBookedDate || date < nextBookedDate.start;
};
