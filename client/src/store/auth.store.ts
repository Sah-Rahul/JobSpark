import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { User } from "../@types/auth.types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;

  setAuth: (user: User) => void;
  clearAuth: () => void;
  updateUser: (fields: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        isAuthenticated: false,

        setAuth: (user: User) => {
          set({ user, isAuthenticated: true }, false, "auth/setAuth");
        },

        clearAuth: () => {
          set({ user: null, isAuthenticated: false }, false, "auth/clearAuth");
        },

        updateUser: (fields) => {
          const current = get().user;
          if (!current) return;
          set({ user: { ...current, ...fields } }, false, "auth/updateUser");
        },
      }),
      {
        name: "jobspark-auth",
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated,
        }),
      },
    ),
    { name: "AuthStore" },
  ),
);
