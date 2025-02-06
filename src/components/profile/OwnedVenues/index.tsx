import { useState } from "react";
import { useProfileVenues } from "@/hooks/profile/useProfileVenues";
import { useDeleteVenue } from "@/hooks/venues/useDeleteVenue";
import { useModal } from "@/hooks/ui/useModal";
import { Venue } from "@/types/venue";
import { filterUpcomingBookings } from "@/utils/bookings/filterBookings";
import { sortBookingsByDate } from "@/utils/bookings/sortBookings";

import Alert from "@/components/ui/Alert";
import OwnedVenueCard from "@/components/profile/OwnedVenueCard";
import VenueCard from "@/components/venues/VenueCard";
import DeleteModal from "@/components/modals/DeleteModal";
import BookingsModal from "@/components/modals/BookingsModal";

interface OwnedVenuesProps {
  profileName: string;
  isOwner: boolean;
}

export default function OwnedVenues({ profileName, isOwner }: OwnedVenuesProps) {
  const [venueForBookings, setVenueForBookings] = useState<Venue | null>(null);
  const [venueToDelete, setVenueToDelete] = useState<Venue | null>(null);

  const { venues, isLoading, isError } = useProfileVenues(profileName);
  const { deleteVenue, isPending } = useDeleteVenue(profileName);
  const { modalOpen, openModal, closeModal } = useModal();

  const handleViewBookings = (venue: Venue) => {
    const upcomingBookings = filterUpcomingBookings(venue.bookings || []);
    const sortedBookings = sortBookingsByDate(upcomingBookings);
    setVenueForBookings({ ...venue, bookings: sortedBookings });
    openModal();
  };

  const handleDeleteVenue = () => {
    if (venueToDelete) {
      deleteVenue(venueToDelete.id);
      setVenueToDelete(null);
    }
  };

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
    <>
      <ul className="grid grid-cols-list gap-x-6 gap-y-8">
        {venues.map((venue) =>
          isOwner ? (
            <OwnedVenueCard
              key={venue.id}
              venue={venue}
              onDelete={() => setVenueToDelete(venue)}
              onViewBookings={() => handleViewBookings(venue)}
            />
          ) : (
            <VenueCard key={venue.id} venue={venue} />
          ),
        )}
      </ul>

      <BookingsModal modalOpen={modalOpen} closeModal={closeModal} venue={venueForBookings} />

      <DeleteModal
        modalOpen={!!venueToDelete}
        closeModal={() => setVenueToDelete(null)}
        onDelete={handleDeleteVenue}
        isPending={isPending}
        deleteType="venue"
      />
    </>
  );
}
