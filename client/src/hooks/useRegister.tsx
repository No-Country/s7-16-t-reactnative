import { useNavigation } from "@react-navigation/native";
import { Register } from "../utils/api/smartShopDB";
import { UseRegisterStore } from "../store/RegisterStore";

export interface Values {
  email: string | null | undefined;
  password: string | null | undefined;
  firstname: string | null | undefined;
  lastname: string | null | undefined;
  documentType: string | null | undefined;
  documentNumber: number | null | undefined;
  gender: string | null | undefined;
  mobile: number | null | undefined;
  birthdate: string | null | undefined;
}

export const useRegister = () => {
  const navigation = useNavigation();

  const setRegister = UseRegisterStore((state) => state.setRegister);
  const setRegister2 = UseRegisterStore((state) => state.setRegister2);

  const handleSubmit = async (values: Values) => {
    const register = UseRegisterStore.getState().register;
    console.log("values: " + values.email);
    setRegister(values);
    console.log(register);
    navigation.navigate("Register2" as never);
  };

  const handleSubmit2 = async (values: Values) => {
    const register = UseRegisterStore.getState().register;
    const register2 = UseRegisterStore.getState().register2;
    console.log("values: " + values.firstname);
    setRegister2(values);
    console.log(register2);
    console.log({ ...register, ...register2 });
    // const res = await Register(values);

    // if (res && res.status === 200 && res.data) {
    //   setUser(res.data.userResponse);
    //   navigation.navigate("MyData" as never);
    // }
  };

  return {
    handleSubmit,
    handleSubmit2,
  };
};
