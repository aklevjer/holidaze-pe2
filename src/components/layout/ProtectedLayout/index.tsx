import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

/**
 * ProtectedLayout component that checks if the user is logged in before rendering child routes.
 * If the user is not logged in, it redirects to the login page.
 *
 * @component
 * @returns JSX element representing the protected layout.
 */
export default function ProtectedLayout() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
