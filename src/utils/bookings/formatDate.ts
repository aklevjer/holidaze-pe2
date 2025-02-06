export const formatDateUTC = (date: Date) => {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString();
};

export const formatDateNumeric = (date: Date | string) => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString("nb-NO", options);
};
