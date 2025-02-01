export const getNightCount = (startDate: Date, endDate: Date) => {
  const timeDifference = endDate.getTime() - startDate.getTime();
  const nightCount = timeDifference / (1000 * 60 * 60 * 24);

  return Math.max(1, Math.floor(nightCount));
};
