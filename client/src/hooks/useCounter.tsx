import React, { useState } from "react";
import { useCartStore } from "../store/CartStore";

export const useCounter = (initialValue?: number, productId?: string) => {
  const [counter, setCounter] = useState<number>(initialValue ?? 1);

  const totalPriceProduct = useCartStore((state) => state.totalAmount);
  const totalListProduct = useCartStore((state) => state.totalPrice);
  const updatedProduct = useCartStore((state) => state.updateProduct);

  const incrementCounter = (price: number) => {
    setCounter(counter + 1);

    const newTotalPayment = totalListProduct + price;

    const newTotalPrice = totalPriceProduct + price * counter;

    if (productId) {
      updatedProduct(productId, counter + 1);
    }
    useCartStore.setState({ totalAmount: newTotalPrice });
    useCartStore.setState({ totalPrice: newTotalPayment });
  };

  const decrementCounter = (price: number) => {
    if (counter > 1) {
      setCounter(counter - 1);

      const newTotalPayment = totalListProduct - price;
      const newTotalPrice = totalPriceProduct + price * counter;

      if (productId) {
        updatedProduct(productId, counter - 1);
      }
      useCartStore.setState({ totalAmount: newTotalPrice });
      useCartStore.setState({ totalPrice: newTotalPayment });
    }
  };

  return {
    counter,
    incrementCounter,
    decrementCounter,
  };
};
