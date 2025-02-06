import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { Venue } from "@/types/venue";
import { DEFAULT_VENUE_IMG } from "@/constants/images";

import Button from "@/components/ui/Button";
import VenueDropdown from "@/components/profile/VenueDropdown";

interface OwnedVenueCardProps {
  venue: Venue;
  onViewBookings: () => void;
  onDelete: () => void;
}

export default function OwnedVenueCard({ venue, onViewBookings, onDelete }: OwnedVenueCardProps) {
  const { id, name, media, price, location } = venue;

  return (
    <li className="grid grid-rows-card rounded-md border border-neutral-300 shadow-elevated">
      <div className="relative overflow-hidden rounded-t-md">
        <img
          src={media[0]?.url || DEFAULT_VENUE_IMG}
          alt={media[0]?.alt || name}
          className="aspect-3/2 size-full object-cover"
        />

        <div className="absolute right-0 top-0 rounded-bl bg-teal-900 px-2 py-1 text-m font-medium capitalize text-neutral-100">
          ${price} <span className="text-sm">/night</span>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 p-4 text-sm">
        <div>
          <h2 className="mb-1 line-clamp-2 text-base font-semibold">
            <Link to={`/venue/${id}`} className="hover:underline">
              {name}
            </Link>
          </h2>

          {(location.city || location.country) && (
            <div className="flex items-center gap-1">
              <BiMap size={16} className="flex-shrink-0" />
              <span className="line-clamp-2">
                {location.city && location.country
                  ? `${location.city}, ${location.country}`
                  : location.city || location.country}
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-between gap-2">
          <Button variant="primary" onClick={onViewBookings}>
            View bookings
          </Button>
          <VenueDropdown venue={venue} onDelete={onDelete} />
        </div>
      </div>
    </li>
  );
}
