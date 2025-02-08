import { Link } from "react-router-dom";
import { Venue } from "@/types/venue";

import CardSkeleton from "@/components/skeletons/CardSkeleton";
import VenueCard from "@/components/venues/VenueCard";
import Alert from "@/components/ui/Alert";

interface LatestVenuesProps {
  venues: Venue[];
  isLoading: boolean;
  isError: boolean;
}

export default function LatestVenues({ venues, isLoading, isError }: LatestVenuesProps) {
  return (
    <section className="container my-20">
      <div className="mb-8 flex items-center justify-between border-b border-slate-500 pb-2">
        <h2 className="text-2xl font-semibold capitalize">Latest venues</h2>
        <Link to="/venues" className="font-medium capitalize hover:underline">
          View all
        </Link>
      </div>

      {isLoading && (
        <div className="grid grid-cols-list gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      )}

      {isError && (
        <Alert type="error" message="Oops! Failed to load latest venues. Please try again later." />
      )}

      {venues.length > 0 && (
        <ul className="grid grid-cols-list gap-x-6 gap-y-8 overflow-wrap-anywhere sm:grid-cols-2 md:grid-cols-4">
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </ul>
      )}
    </section>
  );
}
