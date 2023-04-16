import { useNavigation } from "@react-navigation/native";
import { Register, Login } from "../utils/api/smartShopDB";
import { UseRegisterStore } from "../store/RegisterStore";
import { UseUserStore } from "../store/UserStore";
import { useLoader } from "./useLoader";

export interface PartialValues {
  firstName: string;
  lastName: string;
  documentType: string;
  dni: string;
  genre: string;
  phNumber: string;
  birthdate: string;
}
export interface Values {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  documentType: string;
  dni: string | number;
  genre: string;
  phNumber: string | number;
  birthdate: Date;
}

export const useRegister = () => {
  const navigation = useNavigation();
  const setRegister = UseRegisterStore((state) => state.setRegister);
  const setUser = UseUserStore((state) => state.setUser);
  const { closeLoader, openLoader, isLoading } = useLoader();

  const handleSubmit1 = async (values: Values) => {
    setRegister(values);
    navigation.navigate("Register2" as never);
  };

  const handleSubmit2 = async (values: Values) => {
    const register = UseRegisterStore.getState().register;
    const valoresFinales = { ...register, ...values };
    valoresFinales.dni = Number(valoresFinales.dni);
    valoresFinales.phNumber = Number(valoresFinales.phNumber);

    setRegister(valoresFinales);

    try {
      openLoader();
      const resRegister = await Register(valoresFinales);
      console.log(resRegister);
      if (resRegister && resRegister.data.error === false) {
        setRegister(valoresFinales);
        const resLogin = await Login({
          email: valoresFinales.email,
          password: valoresFinales.password,
        });
        if (resLogin && resLogin.status === 200 && resLogin.data) {
          setUser(resLogin.data.userResponse);
          navigation.navigate("StackNavigation" as never);
        }
      }
      closeLoader();
    } catch (errores) {
      console.log(errores);
    }
  };

  return {
    handleSubmit1,
    handleSubmit2,
    isLoading,
  };
};
