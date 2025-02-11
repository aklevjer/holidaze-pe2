import { useCreateVenue } from "@/hooks/venues/useCreateVenue";
import { VenueFormData } from "@/schemas/venueSchema";

import Page from "@/components/layout/Page";
import VenueForm from "@/components/forms/VenueForm";

/**
 * AddVenue component that renders the Add Venue page with a form to submit venue details.
 *
 * @component
 * @returns JSX element representing the Add Venue page.
 */
export default function AddVenue() {
  const { createVenue, isPending, error } = useCreateVenue();

  /**
   * Handles the form submission and calls the API hook to create a new venue.
   *
   * @param venueData - The data submitted from the venue form.
   */
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
