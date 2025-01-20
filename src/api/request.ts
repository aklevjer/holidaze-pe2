import apiClient from "@/api/client";

export const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: Record<string, unknown>,
): Promise<T> => {
  const response = await apiClient.request<T>({ method, url, data });
  return response.data;
};
