import { useEffect, useState } from "react";
import { UseUserStore } from "../store/UserStore";
import { Cart } from "../utils/interfaces/api.interfaces";
import { useLoader } from "./useLoader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCompras } from "../utils/api/smartShopDB";

export const useCompras = () => {
  const user = UseUserStore.getState().user;

  const [compras, setCompras] = useState<Cart[]>([]);

  const { closeLoader, openLoader, isLoading } = useLoader(true);

  useEffect(() => {
    openLoader();

    const fetchCompras = async () => {
      const token = await AsyncStorage.getItem("token");

      if (user && token) {
        const res = await getCompras(user._id, token);

        if (res && res.data && res.data.cart) {
          setCompras(res.data.cart);
        }
      }

      closeLoader();
    };

    fetchCompras();
  }, []);

  return {
    compras,
    isLoading,
    user,
  };
};
