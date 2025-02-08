import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { BiMap } from "react-icons/bi";
import { useVenueLocation } from "@/hooks/venues/useVenueLocation";
import { VenueLocation } from "@/types/venue";

import Skeleton from "@/components/ui/Skeleton";
import Alert from "@/components/ui/Alert";

export default function Map({ location }: { location: VenueLocation }) {
  const { city, country, lat, lng } = location;
  const { geoLocation, isLoading, isError } = useVenueLocation(location);

  const latitude = lat || (geoLocation ? parseFloat(geoLocation.lat) : null);
  const longitude = lng || (geoLocation ? parseFloat(geoLocation.lon) : null);

  const hasLocation = latitude !== null && longitude !== null;

  return (
    <div>
      <h2 className="mb-1 text-xl font-semibold">Location</h2>
      {city || country ? (
        <div className="mb-4 flex items-center gap-1">
          <BiMap size={20} />
          <span>{city && country ? `${city}, ${country}` : city || country}</span>
        </div>
      ) : (
        <p>No location available.</p>
      )}

      {isLoading && <Skeleton className="h-60" />}

      {isError && (
        <Alert type="error" message="Oops! Failed to load map location. Please try again later." />
      )}

      {hasLocation && (
        <MapContainer
          center={[latitude, longitude]}
          zoom={12}
          className="z-0 h-60 w-full rounded-md"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[latitude, longitude]} />
        </MapContainer>
      )}
    </div>
  );
}
