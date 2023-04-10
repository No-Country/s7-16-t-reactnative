import { useNavigation } from "@react-navigation/native";
import { Login } from "../utils/api/smartShopDB";
import { UseUserStore } from "../store/UserStore";

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

    if (res && res.status === 200 && res.data) {
      setUser(res.data);
      navigation.navigate("MyData" as never);
    }
  };

  return {
    handleSubmit,
  };
};
