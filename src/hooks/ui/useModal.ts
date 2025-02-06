import { useState } from "react";

export const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return { modalOpen, openModal, closeModal };
};
