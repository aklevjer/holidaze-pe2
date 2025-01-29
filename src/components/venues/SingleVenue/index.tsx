import { Venue } from "@/types/venue";
import { DEFAULT_VENUE_IMG } from "@/constants/images";
import Gallery from "@/components/venues/Gallery";

export default function SingleVenue({ venue }: { venue: Venue }) {
  const { name, media } = venue;

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
    </>
  );
}
