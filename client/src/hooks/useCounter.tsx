import React, { useState } from "react";

export const useCounter = (initialValue?: number) => {
  const [counter, setCounter] = useState<number>(initialValue ?? 1);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return {
    counter,
    incrementCounter,
    decrementCounter,
  };
};
