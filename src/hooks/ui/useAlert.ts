import { useState } from "react";

/**
 * Custom hook that manages alert messages with timeout.
 *
 * @returns An object containing:
 * - `alertMessage`: The current message or `null` if no alert is displayed.
 * - `showAlert`: Function to display an alert for a specified duration.
 */
export const useAlert = () => {
  const [alertMessage, setAlertMessage] = useState<null | string>(null);

  const showAlert = (message: string, duration = 3000) => {
    setAlertMessage(message);
    const timer = setTimeout(() => setAlertMessage(null), duration);
    return () => clearTimeout(timer);
  };

  return { alertMessage, showAlert };
};
