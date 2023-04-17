import { create } from "zustand";
import { RegisterData } from "../utils/interfaces/api.interfaces";

export interface RegisterState {
  register: null | RegisterData;
  register2: null | RegisterData;
  setRegister: (user: RegisterData) => void;
  setRegister2: (user: RegisterData) => void;
  cancel: () => void;
}

export const UseRegisterStore = create<RegisterState>((set) => ({
  register: null,
  register2: null,
  setRegister: (register) => set({ register }),
  setRegister2: (register2) => set({ register2 }),
  cancel: () => {
    set({ register: null });
    set({ register2: null });
  },
}));
