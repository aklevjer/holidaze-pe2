import { Helmet } from "react-helmet-async";

interface PageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

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
