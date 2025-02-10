import { useVenues } from "@/hooks/venues/useVenues";
import Page from "@/components/layout/Page";
import Hero from "@/components/sections/Hero";
import LatestVenues from "@/components/sections/LatestVenues";
import NewsletterForm from "@/components/forms/NewsletterForm";

/**
 * Home component that renders the Home page with a hero section, latest venues, and a newsletter form.
 * Fetches and displays the most recent venues.
 *
 * @component
 * @returns JSX element representing the Home page.
 */
export default function Home() {
  const { venues, isLoading, isError } = useVenues({
    sort: "created",
    sortOrder: "desc",
    page: 1,
    limit: 4,
  });

  return (
    <Page
      title="Home"
      description="Book unique stays or share your space with travelers. Holidaze makes it effortless."
    >
      <Hero />
      <LatestVenues venues={venues} isLoading={isLoading} isError={isError} />
      <NewsletterForm />
    </Page>
  );
}
