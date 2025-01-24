import { Link } from "react-router-dom";
import { BiMap, BiSolidUser, BiSolidStar } from "react-icons/bi";
import { Venue } from "@/types/venue";
import { DEFAULT_VENUE_IMG } from "@/constants/images";

interface VenueCardProps {
  venue: Venue;
  useH2?: boolean;
}

export default function VenueCard({ venue, useH2 }: VenueCardProps) {
  const { id, name, media, price, location, maxGuests, rating } = venue;
  const HeadingTag = useH2 ? "h2" : "h3";

  return (
    <li className="group grid rounded-md border border-neutral-300 shadow-elevated">
      <Link to={`/venue/${id}`} className="grid grid-rows-card rounded-md">
        <div className="relative overflow-hidden rounded-t-md">
          <img
            src={media[0]?.url || DEFAULT_VENUE_IMG}
            alt={media[0]?.alt || name}
            className="aspect-3/2 size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute right-0 top-0 rounded-bl bg-teal-900 px-2 py-1 text-m font-medium capitalize text-neutral-100">
            ${price} <span className="text-sm">/night</span>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 p-4 text-sm">
          <div>
            <HeadingTag className="mb-1 line-clamp-2 text-base font-semibold group-hover:underline">
              {name}
            </HeadingTag>

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

          <div className="flex flex-wrap justify-between gap-2">
            <div className="flex items-center gap-1">
              <BiSolidUser size={16} className="flex-shrink-0" />
              <span>{maxGuests} Guests</span>
            </div>

            <div className="flex items-center gap-1">
              <BiSolidStar size={16} className="flex-shrink-0" />
              <span>{rating === 0 ? rating : rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
