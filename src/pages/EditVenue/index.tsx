import { useParams } from "react-router-dom";
import { useVenueById } from "@/hooks/venues/useVenueById";
import { useUpdateVenue } from "@/hooks/venues/useUpdateVenue";
import { VenueFormData } from "@/schemas/venueSchema";

import Page from "@/components/layout/Page";
import Skeleton from "@/components/ui/Skeleton";
import VenueForm from "@/components/forms/VenueForm";
import Alert from "@/components/ui/Alert";

export default function EditVenue() {
  const { id } = useParams();

  const { venue, isLoading, isError } = useVenueById(String(id));
  const { updateVenue, isPending, error } = useUpdateVenue(String(id));

  const handleEditVenue = (venueData: VenueFormData) => {
    updateVenue(venueData);
  };

  return (
    <Page
      title="Edit Venue"
      description="Easily edit your venue on Holidaze and update your listing for potential guests."
    >
      <section className="container mb-20 mt-12 max-w-2xl space-y-4">
        <h1 className="text-3xl font-semibold capitalize">Edit venue</h1>

        {isLoading && <Skeleton className="min-h-screen" />}

        {isError && (
          <Alert type="error" message="Oops! Failed to load venue. Please try again later." />
        )}

        {venue && (
          <VenueForm onSubmit={handleEditVenue} isPending={isPending} error={error} venue={venue} />
        )}
      </section>
    </Page>
  );
}
