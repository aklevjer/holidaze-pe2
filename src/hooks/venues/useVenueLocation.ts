import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { VenueLocation } from "@/types/venue";
import { NominatimResponse } from "@/types/geocoding";

export const useVenueLocation = (location: VenueLocation) => {
  const queryKey = ["geolocation", location.city, location.country];

  const queryFn = async (): Promise<NominatimResponse[]> => {
    const response = await axios.get<NominatimResponse[]>(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          city: location.city,
          country: location.country,
          format: "json",
          limit: 1,
        },
      },
    );

    return response.data;
  };

  const { data, isLoading, isError } = useQuery<NominatimResponse[], Error>({
    queryKey,
    queryFn,
    enabled: !(location.lat || location.lng) && Boolean(location.city || location.country),
  });

  return { geoLocation: data?.[0] || null, isLoading, isError };
};
