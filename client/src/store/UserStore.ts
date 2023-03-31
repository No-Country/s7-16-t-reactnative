import { create } from "zustand";

interface UserState {
  user: null | User;
  setUser: (user: User) => void;
  logout: () => void;
}

// Interface de ejemplo, seguramente crezca una vez se tenga acceso al api login
interface User {
  name: string;
  email: string;
}

export const UseUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

/*
    Este es un ejemplo de zustand para acceder al estado user:
    const user = useUserStore((state) => state.user)


    Este es un ejemplo de zustand para cambiar el estado user:
    useUserStore.getState().setUser(res.data.response.userData)
 */
