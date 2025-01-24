import { useVenues } from "@/hooks/venues/useVenues";
import Hero from "@/components/sections/Hero";
import LatestVenues from "@/components/sections/LatestVenues";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Home() {
  const { venues, isLoading, isError } = useVenues({
    sort: "created",
    sortOrder: "desc",
    page: 1,
    limit: 4,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Hero />
      <LatestVenues venues={venues} isError={isError} />
      <NewsletterForm />
    </>
  );
}
