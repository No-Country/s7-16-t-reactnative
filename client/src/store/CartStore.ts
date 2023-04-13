import { create } from "zustand";
import { Product } from "../utils/interfaces/api.interfaces";

interface CartState {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  updateProduct: (productId: string, updateProps: Partial<Product>) => void;
}

export const useCartStore = create<CartState>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((prod) => prod._id !== productId),
    })),
  updateProduct: (productId, updateProps) =>
    set((state) => {
      const productIndex = state.products.findIndex(
        (prod) => prod._id === productId
      );
      if (productIndex === -1) return state;

      const updatedProduct = {
        ...state.products[productIndex],
        ...updateProps,
      };

      const updatedProducts = [...state.products];
      updatedProducts[productIndex] = updatedProduct;

      return { ...state, products: updatedProducts };
    }),
}));
