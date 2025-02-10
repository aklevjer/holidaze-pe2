import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import { apiRequest } from "@/api/request";
import { AuthResponse } from "@/types/user";
import { LoginFormData } from "@/schemas/loginSchema";

/**
 * Custom hook that logs the user in via the API.
 * Stores the user state and navigates to the profile page on success.
 *
 * @returns An object containing:
 * - `loginUser`: The mutation function to trigger the login request.
 * - `isPending`: Indicating whether the request is in progress.
 * - `error`: The error object if the request fails.
 */
export const useLoginUser = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation<AuthResponse, Error, LoginFormData>({
    mutationFn: (loginData) => apiRequest("/auth/login?_holidaze=true", "POST", loginData),
    onSuccess: ({ data: user }) => {
      login(user);
      navigate("/profile");
    },
  });

  return { loginUser: mutate, isPending, error };
};
