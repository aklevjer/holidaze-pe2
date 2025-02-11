import { useState } from "react";

/**
 * Custom hook that manages the state of a modal (open/close).
 *
 * @returns An object containing:
 * - `modalOpen`: Whether the modal is currently open.
 * - `openModal`: Function to open the modal.
 * - `closeModal`: Function to close the modal.
 */
export const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return { modalOpen, openModal, closeModal };
};
