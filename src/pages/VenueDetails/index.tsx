import { useParams } from "react-router-dom";
import { useVenueById } from "@/hooks/venues/useVenueById";

import Page from "@/components/layout/Page";
import VenueSkeleton from "@/components/skeletons/VenueSkeleton";
import SingleVenue from "@/components/venues/SingleVenue";
import Alert from "@/components/ui/Alert";

/**
 * VenueDetails component that renders the Venue Details page, displaying information about a specific venue.
 *
 * @component
 * @returns JSX element representing the Venue Details page.
 */
export default function VenueDetails() {
  const { id } = useParams();
  const { venue, isLoading, isError } = useVenueById(String(id));

  return (
    <Page
      title={venue?.name || "Venue"}
      description={venue?.description || "Discover more about this venue at Holidaze."}
    >
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
    </Page>
  );
}
