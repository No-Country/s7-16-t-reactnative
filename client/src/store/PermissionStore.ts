import { create } from "zustand";

interface PermissionStore {
  hasPermission: boolean | null;
  setPermission: (permission: boolean) => void;
}

export const usePermissionStore = create<PermissionStore>((set) => ({
  hasPermission: null,
  setPermission: (permission) => set({ hasPermission: permission }),
}));
