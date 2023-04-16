import { useNavigation } from "@react-navigation/native";
import { Login } from "../utils/api/smartShopDB";
import { UseUserStore } from "../store/UserStore";
import { useLoader } from "./useLoader";
import { useState } from "react";

export interface Values {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigation = useNavigation();

  const { closeLoader, openLoader, isLoading } = useLoader();

  const setUser = UseUserStore((state) => state.setUser);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleSubmit = async (values: Values) => {
    openLoader();
    console.log(values);

    const res = await Login(values);

    if (res && res.status === 200 && res.data) {
      setUser(res.data.userResponse);
      navigation.navigate("StackNavigation" as never);
    } else {
      setModalVisible(true);
    }

    closeLoader();
  };

  return {
    handleSubmit,
    isLoading,
    modalVisible,
    setModalVisible,
  };
};
