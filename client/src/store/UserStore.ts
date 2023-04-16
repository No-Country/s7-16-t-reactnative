import { create } from "zustand";
import { UserResponse } from "../utils/interfaces/api.interfaces";

export interface UserState {
  user: null | UserResponse;
  setUser: (user: UserResponse | null) => void;
  logout: () => void;
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

    
    const setUser = UseUserStore((state) => state.setUser);
    setUser(res.data.response.userData)
 */
