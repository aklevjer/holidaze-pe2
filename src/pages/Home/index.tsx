import { useLatestVenues } from "@/hooks/venues/useLatestVenues";
import Hero from "@/components/sections/Hero";
import LatestVenues from "@/components/sections/LatestVenues";

export default function Home() {
  const { venues, isLoading, isError } = useLatestVenues();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Hero />
      <LatestVenues venues={venues} isError={isError} />
    </>
  );
}
