import Page from "@/components/layout/Page";
import Button from "@/components/ui/Button";

/**
 * NotFound component that renders a 404 Page Not Found with a message and a CTA button.
 *
 * @component
 * @returns JSX element representing the Not Found page.
 */
export default function NotFound() {
  return (
    <Page
      title="Page Not Found"
      description="Oops! The page you're looking for doesn't exist on Holidaze."
    >
      <section className="container mb-20 mt-12">
        <div className="mx-auto max-w-prose space-y-4 text-center">
          <span className="text-6xl">&#x1F615;</span>
          <h1 className="text-4xl font-semibold capitalize leading-tight">Oops! Page not found</h1>
          <p>
            We’re sorry, but the page you’re looking for doesn’t seem to exist. It might have been
            moved, renamed, or perhaps it never existed.
          </p>
          <Button variant="primary" path="/" className="inline-block">
            Back to home
          </Button>
        </div>
      </section>
    </Page>
  );
}
