import { useNavigation } from "@react-navigation/native";
import { Login } from "../utils/api/smartShopDB";
import { UseUserStore } from "../store/UserStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLoader } from "./useLoader";
import { useState } from "react";
//import { showMessage } from "react-native-flash-message";

export interface Values {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigation = useNavigation();

  const setUser = UseUserStore((state) => state.setUser);
  const { closeLoader, openLoader, isLoading } = useLoader();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleSubmit = async (values: Values) => {
    openLoader();
    console.log(values);

    const res = await Login(values);

    if (res && res.status === 200 && res.data) {
      setUser(res.data.userResponse);
      console.log(res.data.userResponse.carts[0]);
      await AsyncStorage.setItem("token", res.data.token);
      navigation.navigate("StackNavigation" as never);
    } else {
      setModalVisible(true);
    }

    closeLoader();
    // console.log(values);

    // const res = await Login(values);
    // console.log(res);

    // if (res && res.status === 200 && res.data) {
    //   setUser(res.data.userResponse);
    //   await AsyncStorage.setItem("token", res.data.token);
    //   // console.log(res.data.token);
    //   navigation.navigate("StackNavigation" as never);
    // }
  };

  return {
    handleSubmit,
    isLoading,
    modalVisible,
    setModalVisible,
  };
};
