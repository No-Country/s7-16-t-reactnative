import { useNavigation } from "@react-navigation/native";
import { Login } from "../utils/api/smartShopDB";
import { UseUserStore } from "../store/UserStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Values {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigation = useNavigation();

  const setUser = UseUserStore((state) => state.setUser);

  const handleSubmit = async (values: Values) => {
    console.log(values);

    const res = await Login(values);
    console.log(res);

    if (res && res.status === 200 && res.data) {
      setUser(res.data.userResponse);
      await AsyncStorage.setItem("token", res.data.token);
      // console.log(res.data.token);
      navigation.navigate("StackNavigation" as never);
    }
  };

  return {
    handleSubmit,
  };
};
