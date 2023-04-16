import { useNavigation } from "@react-navigation/native";
import { Register, Login } from "../utils/api/smartShopDB";
import { UseRegisterStore } from "../store/RegisterStore";
import { UseUserStore } from "../store/UserStore";
import { RegisterData } from "../utils/interfaces/api.interfaces";

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

  const handleSubmit1 = async (values: Values) => {
    setRegister(values);
    navigation.navigate("Register2" as never);
  };

  const handleSubmit2 = async (values: Values) => {
    const register = UseRegisterStore.getState().register;
    const valoresFinales = { ...register, ...values };
    valoresFinales.dni = Number(valoresFinales.dni);
    valoresFinales.phNumber = Number(valoresFinales.phNumber);
    const birth = new Date();
    setRegister(valoresFinales);

    const valores: RegisterData = {
      firstName: "pepe",
      lastName: "grillo",
      dni: 12313123,
      email: "pepe@grillo.com",
      password: "1231233",
      confirmPassword: "1231233",
      phNumber: 123123123,
      birthdate: birth,
      documentType: "DNI",
      genre: "Masculino",
    };
    console.log("valores:");
    console.log(valores);
    console.log("values:");
    console.log(valoresFinales);

    try {
      const resRegister = await Register(valoresFinales);
      console.log(resRegister);

      if (resRegister && resRegister.data.error === false) {
        setRegister(valores);
        console.log("trying to login");
        const resLogin = await Login({
          email: valoresFinales.email,
          password: valoresFinales.password,
        });
        if (resLogin && resLogin.status === 200 && resLogin.data) {
          setUser(resLogin.data.userResponse);
          navigation.navigate("StackNavigation" as never);
        }
      }
    } catch (errores) {
      console.log(errores);
    }
  };

  return {
    handleSubmit1,
    handleSubmit2,
  };
};
