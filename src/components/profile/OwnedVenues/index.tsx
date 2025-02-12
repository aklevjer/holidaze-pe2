import { useState } from "react";
import { useProfileVenues } from "@/hooks/profile/useProfileVenues";
import { useDeleteVenue } from "@/hooks/venues/useDeleteVenue";
import { useModal } from "@/hooks/ui/useModal";
import { Venue } from "@/types/venue";
import { filterUpcomingBookings } from "@/utils/bookings/filterBookings";
import { sortBookingsByDate } from "@/utils/bookings/sortBookings";

import Alert from "@/components/ui/Alert";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import OwnedVenueCard from "@/components/profile/OwnedVenueCard";
import VenueCard from "@/components/venues/VenueCard";
import DeleteModal from "@/components/modals/DeleteModal";
import BookingsModal from "@/components/modals/BookingsModal";

interface OwnedVenuesProps {
  profileName: string;
  isOwner: boolean;
}

/**
 * OwnedVenues component that displays a list of venues owned by the user.
 * Allows for venue management actions like viewing bookings and deleting venues.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.profileName - The name of the profile whose owned venues are displayed.
 * @param props.isOwner - Whether the logged-in user is the owner of the profile.
 *
 * @returns JSX element representing the owned venues.
 */
export default function OwnedVenues({ profileName, isOwner }: OwnedVenuesProps) {
  const [venueForBookings, setVenueForBookings] = useState<Venue | null>(null);
  const [venueToDelete, setVenueToDelete] = useState<Venue | null>(null);

  const { venues, isLoading, isError } = useProfileVenues(profileName);
  const { deleteVenue, isPending, error } = useDeleteVenue(profileName);
  const { modalOpen, openModal, closeModal } = useModal();

  /**
   * Handles viewing the bookings for a specific venue.
   * Filters and sorts the upcoming bookings, then sets the venue state for the modal.
   *
   * @param venue - The venue whose bookings are to be viewed.
   */
  const handleViewBookings = (venue: Venue) => {
    const upcomingBookings = filterUpcomingBookings(venue.bookings || []);
    const sortedBookings = sortBookingsByDate(upcomingBookings);
    setVenueForBookings({ ...venue, bookings: sortedBookings });
    openModal();
  };

  /**
   * Deletes the selected venue and resets the `venueToDelete` state on success.
   */
  const handleDeleteVenue = () => {
    if (venueToDelete) {
      deleteVenue(venueToDelete.id, {
        onSuccess: () => {
          setVenueToDelete(null);
        },
      });
    }
  };

  return (
    <>
      {isLoading && (
        <div className="grid grid-cols-list gap-x-6 gap-y-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      )}

      {isError && (
        <Alert type="error" message="Oops! Failed to load venues. Please try again later." />
      )}

      {venues.length > 0 && (
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
              <VenueCard key={venue.id} venue={venue} useH2 />
            ),
          )}
        </ul>
      )}

      {venues.length === 0 && !isLoading && (
        <Alert
          type="info"
          message={
            isOwner ? "You don't have any venues yet." : "This user doesn't have any venues yet."
          }
        />
      )}

      <BookingsModal modalOpen={modalOpen} closeModal={closeModal} venue={venueForBookings} />

      <DeleteModal
        modalOpen={!!venueToDelete}
        closeModal={() => setVenueToDelete(null)}
        onDelete={handleDeleteVenue}
        isPending={isPending}
        error={error}
        deleteType="venue"
      />
    </>
  );
}
