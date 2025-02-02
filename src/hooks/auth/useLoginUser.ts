import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import { apiRequest } from "@/api/request";
import { AuthResponse } from "@/types/user";
import { LoginFormData } from "@/schemas/loginSchema";

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
