import axios from "axios";
import { useAuthStore } from "@/store/authStore";
import { API_BASE_URL, API_KEY } from "@/constants/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Noroff-API-Key": API_KEY,
  },
});

apiClient.interceptors.request.use((config) => {
  const { user } = useAuthStore.getState();

  if (user && user.accessToken) {
    config.headers["Authorization"] = `Bearer ${user.accessToken}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error?.response?.data?.errors[0]?.message || "Something went wrong!";
    return Promise.reject(new Error(errorMessage));
  },
);

export default apiClient;
