import { create } from "zustand";
import { Product } from "../utils/interfaces/api.interfaces";

interface CartState {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  updateProduct: (productId: string, amount: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((prod) => prod._id !== productId),
    })),

  updateProduct: (productId, amount) =>
    set((state) => ({
      products: state.products.map((product) =>
        product._id === productId ? { ...product, amount } : product
      ),
    })),
}));
