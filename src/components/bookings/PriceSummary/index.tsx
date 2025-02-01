import { getNightCount } from "@/utils/bookings/getNightCount";

interface PriceSummaryProps {
  price: number;
  dates: [Date | null, Date | null];
}

export default function PriceSummary({ price, dates }: PriceSummaryProps) {
  if (!dates[0] || !dates[1]) return null;

  const nightCount = getNightCount(dates[0], dates[1]);
  const totalPrice = Math.round(nightCount * price);

  return (
    <p className="flex flex-wrap justify-between gap-2 text-m">
      ${price} x {nightCount} night{nightCount !== 1 ? "s" : ""}
      <span className="font-semibold">Total: ${totalPrice}</span>
    </p>
  );
}
