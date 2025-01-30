import { useCreateVenue } from "@/hooks/venues/useCreateVenue";
import { VenueFormData } from "@/schemas/venueSchema";
import VenueForm from "@/components/forms/VenueForm";

export default function AddVenue() {
  const { createVenue, isPending, error } = useCreateVenue();

  const handleAddVenue = (venueData: VenueFormData) => {
    createVenue(venueData);
  };

  return (
    <section className="container mb-20 mt-12 max-w-2xl space-y-4">
      <h1 className="text-3xl font-semibold capitalize">Add venue</h1>
      <VenueForm onSubmit={handleAddVenue} isPending={isPending} error={error} />
    </section>
  );
}
