import apiClient from "@/api/client";

/**
 * Sends an API request using the pre-configured Axios client.
 *
 * @template T - The expected response data type.
 * @param url - The endpoint URL for the request.
 * @param method - The HTTP method to use.
 * @param [data] - Optional request payload for POST and PUT requests.
 *
 * @returns A promise resolving to the response data.
 */
export const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: Record<string, unknown>,
): Promise<T> => {
  const response = await apiClient.request<T>({ method, url, data });
  return response.data;
};
