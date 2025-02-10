import { ScrollRestoration, Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/**
 * Layout component that wraps the page content with a header, footer, and manages scroll restoration.
 *
 * @component
 * @returns JSX element representing the layout.
 */
export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
