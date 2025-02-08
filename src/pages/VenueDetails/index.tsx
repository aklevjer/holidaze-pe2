import { useParams } from "react-router-dom";
import { useVenueById } from "@/hooks/venues/useVenueById";

import VenueSkeleton from "@/components/skeletons/VenueSkeleton";
import SingleVenue from "@/components/venues/SingleVenue";
import Alert from "@/components/ui/Alert";

export default function VenueDetails() {
  const { id } = useParams();
  const { venue, isLoading, isError } = useVenueById(String(id));

  return (
    <section className="mb-20 mt-12 space-y-6 md:container">
      {isLoading && <VenueSkeleton />}

      {isError && (
        <Alert
          type="error"
          message="Oops! Failed to load venue. Please try again later."
          className="mx-4 md:mx-0"
        />
      )}

      {venue && <SingleVenue venue={venue} />}
    </section>
  );
}
