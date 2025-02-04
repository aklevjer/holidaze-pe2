import { useProfileVenues } from "@/hooks/profile/useProfileVenues";
import Alert from "@/components/ui/Alert";
import OwnedVenueCard from "@/components/profile/OwnedVenueCard";
import VenueCard from "@/components/venues/VenueCard";

interface OwnedVenuesProps {
  profileName: string;
  isOwner: boolean;
}

export default function OwnedVenues({ profileName, isOwner }: OwnedVenuesProps) {
  const { venues, isLoading, isError } = useProfileVenues(profileName);

  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    return <Alert type="error" message="Oops! Failed to load venues. Please try again later." />;
  }

  if (venues.length === 0) {
    return (
      <Alert
        type="info"
        message={
          isOwner ? "You don't have any venues yet." : "This user doesn't have any venues yet."
        }
      />
    );
  }

  return (
    <ul className="grid grid-cols-list gap-x-6 gap-y-8">
      {venues.map((venue) =>
        isOwner ? (
          <OwnedVenueCard key={venue.id} venue={venue} />
        ) : (
          <VenueCard key={venue.id} venue={venue} />
        ),
      )}
    </ul>
  );
}
