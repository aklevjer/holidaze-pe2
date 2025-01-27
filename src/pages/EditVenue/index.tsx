import { useParams } from "react-router-dom";
import { useVenueById } from "@/hooks/venues/useVenueById";
import { useUpdateVenue } from "@/hooks/venues/useUpdateVenue";
import { VenueFormData } from "@/schemas/venueSchema";

import Alert from "@/components/ui/Alert";
import VenueForm from "@/components/forms/VenueForm";

export default function EditVenue() {
  const { id } = useParams();
  const { venue, isLoading, isError } = useVenueById(id || "");
  const { updateVenue, isPending, error } = useUpdateVenue(id || "");

  const handleEditVenue = (venueData: VenueFormData) => {
    updateVenue(venueData);
  };

  const handleDeleteVenue = () => {
    // TODO: Delete venue
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="container mb-20 mt-12 max-w-2xl space-y-4">
      <h1 className="text-2xl font-semibold capitalize">Edit venue</h1>

      {isError && (
        <Alert type="error" message="Oops! Failed to load venue. Please try again later." />
      )}

      {venue && (
        <VenueForm
          onSubmit={handleEditVenue}
          onDelete={handleDeleteVenue}
          isPending={isPending}
          error={error}
          venue={venue}
        />
      )}
    </section>
  );
}
