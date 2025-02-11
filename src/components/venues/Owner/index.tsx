import { Link } from "react-router-dom";
import { VenueOwner } from "@/types/venue";
import { DEFAULT_AVATAR_IMG } from "@/constants/images";

/**
 * Owner component that displays a venue's owner badge with a link to the owner's profile.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.owner - The venue's owner data.
 *
 * @returns JSX element representing the owner's badge.
 */
export default function Owner({ owner }: { owner: VenueOwner }) {
  const { name, avatar } = owner;

  return (
    <div className="rounded-md border border-neutral-300 p-4">
      <Link to={`/profile/${name}`} className="group inline-flex items-center gap-2">
        <img
          src={avatar?.url || DEFAULT_AVATAR_IMG}
          alt={avatar?.alt || `Avatar for ${name}`}
          onError={(e) => (e.currentTarget.src = DEFAULT_AVATAR_IMG)}
          className="size-10 rounded-full object-cover"
        />

        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">{name}</span>
            <span className="rounded-full border border-sky-100 bg-sky-50 px-2 py-1 text-xs font-medium text-teal-700">
              Host
            </span>
          </div>

          <span className="block text-sm font-medium capitalize text-slate-500 transition-colors group-hover:text-teal-900">
            View profile
          </span>
        </div>
      </Link>
    </div>
  );
}
