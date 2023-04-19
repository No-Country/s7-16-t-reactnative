import { useState } from "react";

export const useLoader = (initialValue?: boolean) => {
  const [isLoading, setIsLoading] = useState<boolean>(initialValue ?? false);

  const openLoader = () => {
    setIsLoading(true);
  };

  const closeLoader = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    openLoader,
    closeLoader,
  };
};
