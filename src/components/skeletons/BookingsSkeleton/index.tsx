import Skeleton from "@/components/ui/Skeleton";

/**
 * BookingsSkeleton component that displays a loading skeleton for the bookings table.
 * Includes placeholders for table headers and booking entries.
 *
 * @component
 * @returns JSX element representing the bookings skeleton.
 */
export default function BookingsSkeleton() {
  return (
    <div className="space-y-2">
      <div className="hidden md:grid md:grid-cols-table">
        <Skeleton className="h-7 w-1/4" />
        <Skeleton className="h-7 w-1/6" />
        <Skeleton className="h-7 w-2/5" />
        <Skeleton className="h-7 w-2/3" />
      </div>

      <div className="space-y-6 md:space-y-2">
        <Skeleton className="h-44 md:h-16" />
        <Skeleton className="h-44 md:h-16" />
      </div>
    </div>
  );
}
