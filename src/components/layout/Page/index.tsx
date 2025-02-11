import { Helmet } from "react-helmet-async";

interface PageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

/**
 * Page component that sets the meta title and description for the page and renders the page content.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.title - The title of the page.
 * @param props.description - The meta description for the page.
 * @param props.children - The content to be rendered inside the page.
 *
 * @returns JSX element representing the page with meta information.
 */
export default function Page({ title, description, children }: PageProps) {
  return (
    <>
      <Helmet>
        <title>{title} - Holidaze</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
}
