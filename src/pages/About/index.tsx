import Page from "@/components/layout/Page";
import AboutDetails from "@/components/sections/AboutDetails";

/**
 * About component that renders the About Us page, including details about Holidaze.
 *
 * @component
 * @returns JSX element representing the About Us page.
 */
export default function About() {
  return (
    <Page
      title="About Us"
      description="Learn more about Holidaze and our mission to connect travelers with unique venues."
    >
      <h1 className="my-12 text-center text-3xl font-semibold capitalize">About us</h1>
      <AboutDetails />
    </Page>
  );
}
