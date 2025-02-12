import { Venue } from "@/types/venue";
import Button from "@/components/ui/Button";

interface ActionsProps {
  venue: Venue;
  onViewBookings: () => void;
}

/**
 * Actions component that displays management actions for a venue if the logged-in user is the owner.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.venue - The venue data for which the actions are displayed.
 * @param props.onViewBookings - Callback function to handle viewing the venue's bookings.
 *
 * @returns JSX element representing the actions.
 */
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
