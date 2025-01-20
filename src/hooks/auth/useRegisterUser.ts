import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/api/request";
import { AuthResponse } from "@/types/auth";
import { RegisterFormData } from "@/schemas/registerSchema";

export const useRegisterUser = () => {
  const { mutate, isPending, error } = useMutation<AuthResponse, Error, RegisterFormData>({
    mutationFn: (registerData) => apiRequest("/auth/register", "POST", registerData),
  });

  return { registerUser: mutate, isPending, error };
};
