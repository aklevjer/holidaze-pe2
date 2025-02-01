export const isDateAvailable = (
  date: Date,
  bookedDates: { start: Date; end: Date }[],
  startDate: Date | null,
) => {
  if (!startDate) return true;
  const nextBookedDate = bookedDates.find((range) => range.start > startDate);
  return !nextBookedDate || date < nextBookedDate.start;
};
