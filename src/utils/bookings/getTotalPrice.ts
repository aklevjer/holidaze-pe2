import { getNightCount } from "@/utils/bookings/getNightCount";

export const getTotalPrice = (
  startDate: Date | string,
  endDate: Date | string,
  price: number,
): number => {
  const dateFrom = new Date(startDate);
  const dateTo = new Date(endDate);

  const nightCount = getNightCount(dateFrom, dateTo);
  return Math.round(nightCount * price);
};
