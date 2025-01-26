import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useCreateVenue } from "@/hooks/venues/useCreateVenue";
import { VenueFormData } from "@/schemas/venueSchema";
import VenueForm from "@/components/forms/VenueForm";

export default function AddVenue() {
  const user = useAuthStore((state) => state.user);
  const { createVenue, isPending, isError } = useCreateVenue();

  const handleAddVenue = (venueData: VenueFormData) => {
    createVenue(venueData);
  };

  if (!user?.venueManager) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <section className="container mb-20 mt-12 max-w-2xl space-y-4">
      <h1 className="text-2xl font-semibold capitalize">Add venue</h1>
      <VenueForm onSubmit={handleAddVenue} isPending={isPending} isError={isError} />
    </section>
  );
}
