import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/auth";

interface AuthStore {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
