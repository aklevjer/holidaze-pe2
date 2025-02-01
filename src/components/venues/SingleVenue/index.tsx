import { useCreateBooking } from "@/hooks/bookings/useCreateBooking";
import { Venue } from "@/types/venue";
import { BookingFormData } from "@/schemas/bookingSchema";
import { DEFAULT_VENUE_IMG } from "@/constants/images";

import Gallery from "@/components/venues/Gallery";
import Rating from "@/components/venues/Rating";
import Amenities from "@/components/venues/Amenities";
import Owner from "@/components/venues/Owner";
import Map from "@/components/venues/Map";
import BookingForm from "@/components/forms/BookingForm";

export default function SingleVenue({ venue }: { venue: Venue }) {
  const { id, name, description, media, price, maxGuests } = venue;
  const { rating, meta, location, owner, bookings } = venue;

  const { createBooking, isPending, error } = useCreateBooking();

  const handleAddBooking = (bookingData: BookingFormData, resetCallback: () => void) => {
    createBooking(bookingData, {
      onSuccess: () => {
        resetCallback();
      },
    });
  };

  return (
    <>
      {media.length > 1 ? (
        <Gallery images={media} />
      ) : (
        <img
          src={media[0]?.url || DEFAULT_VENUE_IMG}
          alt={media[0]?.alt || name}
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
          <BookingForm
            onSubmit={handleAddBooking}
            venueId={id}
            isPending={isPending}
            error={error}
            bookings={bookings || []}
            price={price}
            maxGuests={maxGuests}
          />
        </div>
      </div>
    </>
  );
}
