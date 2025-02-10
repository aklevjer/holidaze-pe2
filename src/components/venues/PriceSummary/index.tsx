import { getNightCount } from "@/utils/bookings/getNightCount";
import { getTotalPrice } from "@/utils/bookings/getTotalPrice";

interface PriceSummaryProps {
  price: number;
  dates: [Date | null, Date | null];
}

/**
 * PriceSummary component that displays a price breakdown for a venue booking,
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.price - Price per night for the venue.
 * @param props.dates - An array of two dates `[startDate, endDate]` representing the selected booking dates.
 *
 * @returns JSX element representing the price summary.
 */
export default function PriceSummary({ price, dates }: PriceSummaryProps) {
  if (!dates[0] || !dates[1]) return null;

  const nightCount = getNightCount(dates[0], dates[1]);
  const totalPrice = getTotalPrice(dates[0], dates[1], price);

  return (
    <p className="flex flex-wrap justify-between gap-2 text-m">
      ${price} x {nightCount} night{nightCount !== 1 ? "s" : ""}
      <span className="font-semibold">Total: ${totalPrice}</span>
    </p>
  );
}
