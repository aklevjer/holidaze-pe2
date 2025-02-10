import Skeleton from "@/components/ui/Skeleton";

/**
 * CardSkeleton component that displays a loading skeleton for a card.
 * Includes placeholders for an image, title, location, guests count, and rating.
 *
 * @component
 * @returns JSX element representing the card skeleton.
 */
export default function CardSkeleton() {
  return (
    <div className="grid grid-rows-card overflow-hidden rounded-md border border-neutral-300 shadow-elevated">
      <Skeleton className="aspect-3/2 rounded-b-none" />

      <div className="flex flex-col justify-between gap-4 p-4">
        <div className="space-y-1">
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-5 w-1/2" />
        </div>

        <div className="flex justify-between gap-2">
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-5 w-1/6" />
        </div>
      </div>
    </div>
  );
}
