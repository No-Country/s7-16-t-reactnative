import { useState } from "react";

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
