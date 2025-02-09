import { useCreateVenue } from "@/hooks/venues/useCreateVenue";
import { VenueFormData } from "@/schemas/venueSchema";

import Page from "@/components/layout/Page";
import VenueForm from "@/components/forms/VenueForm";

export default function AddVenue() {
  const { createVenue, isPending, error } = useCreateVenue();

  const handleAddVenue = (venueData: VenueFormData) => {
    createVenue(venueData);
  };

  return (
    <Page
      title="Add Venue"
      description="Easily add your venue to Holidaze and offer your space to a wide range of potential guests."
    >
      <section className="container mb-20 mt-12 max-w-2xl space-y-4">
        <h1 className="text-3xl font-semibold capitalize">Add venue</h1>
        <VenueForm onSubmit={handleAddVenue} isPending={isPending} error={error} />
      </section>
    </Page>
  );
}
