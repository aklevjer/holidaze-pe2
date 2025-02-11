import { Venue } from "@/types/venue";
import Button from "@/components/ui/Button";

interface ActionsProps {
  venue: Venue;
  onViewBookings: () => void;
}

export default function Actions({ venue, onViewBookings }: ActionsProps) {
  return (
    <div className="rounded-md border border-neutral-300 p-6">
      <h2 className="mb-2 text-lg font-semibold capitalize">Manage your venue</h2>
      <p className="mb-4 text-m">
        As the owner, you can update your venue details or view bookings at any time.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button variant="primary" path={`/venue/${venue.id}/edit`}>
          Edit venue
        </Button>

        <Button variant="secondary" onClick={onViewBookings}>
          View bookings
        </Button>
      </div>
    </div>
  );
}
