import { Link } from "react-router-dom";
import { Venue } from "@/types/venue";

import Alert from "@/components/ui/Alert";
import VenueCard from "@/components/venues/VenueCard";

interface LatestVenuesProps {
  venues: Venue[];
  isError: boolean;
}

export default function LatestVenues({ venues, isError }: LatestVenuesProps) {
  return (
    <section className="container my-20">
      <div className="mb-8 flex items-center justify-between border-b border-slate-500 pb-2">
        <h2 className="text-xl font-semibold capitalize">Latest venues</h2>
        <Link to="/venues" className="font-medium capitalize hover:underline">
          View all
        </Link>
      </div>

      {isError && (
        <Alert type="error" message="Oops! Failed to load latest venues. Please try again later." />
      )}

      {venues.length > 0 && (
        <ul className="grid grid-cols-autofill-220 gap-x-6 gap-y-8 overflow-wrap-anywhere sm:grid-cols-2 md:grid-cols-4">
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </ul>
      )}
    </section>
  );
}
