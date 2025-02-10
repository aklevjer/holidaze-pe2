import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/store/authStore";
import { Booking } from "@/types/booking";
import { BookingFormData, bookingSchema } from "@/schemas/bookingSchema";
import { formatDateUTC } from "@/utils/bookings/formatDate";

import Alert from "@/components/ui/Alert";
import Calendar from "@/components/venues/Calendar";
import GuestSelector from "@/components/venues/GuestSelector";
import PriceSummary from "@/components/venues/PriceSummary";
import Button from "@/components/ui/Button";

interface BookingFormProps {
  onSubmit: (data: BookingFormData, resetCallback: () => void) => void;
  venueId: string;
  isPending: boolean;
  error: Error | null;
  bookings: Booking[];
  price: number;
  maxGuests: number;
}

/**
 * BookingForm component that allows users to book a venue by selecting dates and guests.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.onSubmit - Function to handle form submission with booking data.
 * @param props.venueId - The ID of the venue being booked.
 * @param props.isPending - Whether the booking request is in progress.
 * @param props.error - An error object if the booking request fails, otherwise `null`.
 * @param props.bookings - List of existing bookings to show unavailable dates.
 * @param props.price - Price per night for the venue.
 * @param props.maxGuests - Maximum number of guests allowed.
 *
 * @returns JSX element representing the booking form.
 */
export default function BookingForm({
  onSubmit,
  venueId,
  isPending,
  error,
  bookings,
  price,
  maxGuests,
}: BookingFormProps) {
  const user = useAuthStore((state) => state.user);
  const [dates, setDates] = useState<[Date | null, Date | null]>([null, null]);
  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      venueId,
      dateFrom: "",
      dateTo: "",
    },
  });

  /**
   * Handles changes to the date picker and updates the form state.
   *
   * @param dates - Selected start and end dates.
   */
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    const shouldValidate = !!start && !!end;

    setDates(dates);
    setValue("dateFrom", start ? formatDateUTC(start) : "", { shouldValidate });
    setValue("dateTo", end ? formatDateUTC(end) : "", { shouldValidate });
  };

  /**
   * Handles form submission and resets the form after successful booking.
   *
   * @param bookingData - The submitted booking data.
   */
  const handleBooking = (bookingData: BookingFormData) => {
    onSubmit(bookingData, () => {
      setDates([null, null]);
      reset();
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleBooking)}
      className="space-y-4 rounded-md border border-neutral-300 p-6"
    >
      <h2 className="text-lg font-semibold capitalize">Book venue</h2>

      {error && <Alert type="error" message={error.message} />}

      <Calendar
        dateFrom={dates[0]}
        dateTo={dates[1]}
        onChange={handleDateChange}
        bookings={bookings}
        error={errors.dateFrom || errors.dateTo}
      />

      <GuestSelector maxGuests={maxGuests} register={register("guests")} />
      <PriceSummary price={price} dates={dates} />

      {user ? (
        <Button variant="primary" type="submit" isLoading={isPending} className="w-full">
          Book now
        </Button>
      ) : (
        <Button variant="primary" path="/login" className="inline-block w-full text-center">
          Login to book
        </Button>
      )}
    </form>
  );
}
