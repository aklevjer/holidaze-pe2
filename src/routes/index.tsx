import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProtectedRoutes from "@/components/auth/ProtectedRoutes";
import Home from "@/pages/Home";
import Venues from "@/pages/Venues";
import VenueDetails from "@/pages/VenueDetails";
import AddVenue from "@/pages/AddVenue";
import EditVenue from "@/pages/EditVenue";
import Profile from "@/pages/Profile";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/venues", element: <Venues /> },
      { path: "/venue/:id", element: <VenueDetails /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        element: <ProtectedRoutes />,
        children: [
          { path: "/profile", element: <Profile /> },
          { path: "/profile/:name", element: <Profile /> },
          { path: "/venue/add", element: <AddVenue /> },
          { path: "/venue/:id/edit", element: <EditVenue /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
