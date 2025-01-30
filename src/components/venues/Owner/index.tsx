import { Link } from "react-router-dom";
import { VenueOwner } from "@/types/venue";
import { DEFAULT_AVATAR_IMG } from "@/constants/images";

export default function Owner({ owner }: { owner: VenueOwner }) {
  const { name, avatar } = owner;

  return (
    <div className="rounded-md border border-neutral-300 p-4">
      <Link to={`/profile/${name}`} className="group inline-flex items-center gap-2">
        <img
          src={avatar?.url || DEFAULT_AVATAR_IMG}
          alt={avatar?.alt || `Avatar for ${name}`}
          className="size-10 rounded-full object-cover"
        />

        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">{name}</span>
            <span className="rounded-full border border-sky-100 bg-sky-50 px-2 py-1 text-xs font-semibold text-teal-700">
              Host
            </span>
          </div>

          <span className="block text-sm font-medium capitalize text-slate-500 group-hover:text-teal-900">
            View profile
          </span>
        </div>
      </Link>
    </div>
  );
}
