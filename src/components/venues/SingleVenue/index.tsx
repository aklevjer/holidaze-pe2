import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useCreateBooking } from "@/hooks/bookings/useCreateBooking";
import { useModal } from "@/hooks/ui/useModal";
import { Venue } from "@/types/venue";
import { Booking } from "@/types/booking";
import { BookingFormData } from "@/schemas/bookingSchema";
import { DEFAULT_VENUE_IMG } from "@/constants/images";
import { filterUpcomingBookings } from "@/utils/bookings/filterBookings";
import { sortBookingsByDate } from "@/utils/bookings/sortBookings";

import Gallery from "@/components/venues/Gallery";
import Rating from "@/components/venues/Rating";
import Amenities from "@/components/venues/Amenities";
import Owner from "@/components/venues/Owner";
import Map from "@/components/venues/Map";
import Actions from "@/components/venues/Actions";
import BookingForm from "@/components/forms/BookingForm";
import SuccessModal from "@/components/modals/SuccessModal";
import BookingsModal from "@/components/modals/BookingsModal";

/**
 * SingleVenue component that displays venue details and allows booking for non-owners.
 * Owners can manage their venue, including viewing bookings and other actions.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.venue - The venue data to display.
 *
 * @returns JSX element representing the single venue.
 */
export default function SingleVenue({ venue }: { venue: Venue }) {
  const { id, name, description, media, price, maxGuests } = venue;
  const { rating, meta, location, owner, bookings } = venue;

  const user = useAuthStore((state) => state.user);
  const isOwner = user?.name === owner?.name;

  const [newBooking, setNewBooking] = useState<Booking | null>(null);
  const [venueForBookings, setVenueForBookings] = useState<Venue | null>(null);

  const successModal = useModal();
  const bookingsModal = useModal();

  const { createBooking, isPending, error } = useCreateBooking();

  /**
   * Creates a new booking, resets the form, and opens the success modal.
   *
   * @param bookingData - The booking details submitted by the user.
   * @param resetCallback - Callback function to reset the booking form after success.
   */
  const handleAddBooking = (bookingData: BookingFormData, resetCallback: () => void) => {
    createBooking(bookingData, {
      onSuccess: ({ data: booking }) => {
        resetCallback();
        setNewBooking({ ...booking, venue });
        successModal.openModal();
      },
    });
  };

  /**
   * Handles viewing the bookings for the venue.
   * Filters and sorts the upcoming bookings, then sets the venue state for the modal.
   */
  const handleViewBookings = () => {
    const upcomingBookings = filterUpcomingBookings(bookings || []);
    const sortedBookings = sortBookingsByDate(upcomingBookings);
    setVenueForBookings({ ...venue, bookings: sortedBookings });
    bookingsModal.openModal();
  };

  return (
    <>
      {media.length > 1 ? (
        <Gallery images={media} />
      ) : (
        <img
          src={media[0]?.url || DEFAULT_VENUE_IMG}
          alt={media[0]?.alt || name}
          onError={(e) => (e.currentTarget.src = DEFAULT_VENUE_IMG)}
          className="aspect-3/2 size-full object-cover md:aspect-5/2 md:rounded-md"
        />
      )}

      <div className="grid gap-10 px-4 overflow-wrap-anywhere md:grid-cols-venue md:justify-between md:px-0">
        <div className="space-y-10">
          <div>
            <h1 className="mb-2 text-3xl font-semibold leading-tight">{name}</h1>
            <Rating rating={rating} />

            <p className="mb-4">
              <span className="text-lg font-semibold">${price}</span> /Night
            </p>

            <p>{description}</p>
          </div>

          <Amenities amenities={meta} />
          <Map location={location} />
        </div>

        <div className="space-y-6">
          {owner && <Owner owner={owner} />}

          {isOwner ? (
            <Actions venue={venue} onViewBookings={handleViewBookings} />
          ) : (
            <BookingForm
              onSubmit={handleAddBooking}
              venueId={id}
              isPending={isPending}
              error={error}
              bookings={bookings || []}
              price={price}
              maxGuests={maxGuests}
            />
          )}
        </div>
      </div>

      <SuccessModal
        modalOpen={successModal.modalOpen}
        closeModal={successModal.closeModal}
        booking={newBooking}
      />

      <BookingsModal
        modalOpen={bookingsModal.modalOpen}
        closeModal={bookingsModal.closeModal}
        venue={venueForBookings}
      />
    </>
  );
}
