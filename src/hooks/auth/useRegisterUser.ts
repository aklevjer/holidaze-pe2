import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { AuthResponse } from "@/types/user";
import { RegisterFormData } from "@/schemas/registerSchema";

/**
 * Custom hook that registers a new user via the API.
 *
 * @returns An object containing:
 * - `registerUser`: The mutation function to trigger the registration request.
 * - `isPending`: Indicating whether the request is in progress.
 * - `error`: The error object if the request fails.
 */
export const useRegisterUser = () => {
  const { mutate, isPending, error } = useMutation<AuthResponse, Error, RegisterFormData>({
    mutationFn: (registerData) => apiRequest("/auth/register", "POST", registerData),
  });

  return { registerUser: mutate, isPending, error };
};
