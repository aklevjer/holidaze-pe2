/**
 * Formats a date to UTC in ISO string format.
 *
 * @param date - The date to be formatted.
 * @returns The date in UTC ISO string format.
 */
export const formatDateUTC = (date: Date) => {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString();
};

/**
 * Formats a date to a numeric format (DD.MM.YYYY).
 *
 * @param date - The date (either an ISO string or Date object) to be formatted.
 * @returns The date as a string in the format "DD.MM.YYYY".
 */
export const formatDateNumeric = (date: Date | string) => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString("nb-NO", options);
};
