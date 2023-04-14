import { useNavigation } from "@react-navigation/native";
import { Register } from "../utils/api/smartShopDB";
import { UseRegisterStore } from "../store/RegisterStore";

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
    const valores = {
      firstName: "pepe",
      lastName: "grillo",
      dni: 12313123,
      email: "pepe@grillo.com",
      password: "1231233",
      confirmPassword: "1231233",
      phNumber: 123123123,
      birthdate: "12-10-99",
      documentType: "DNI",
      genre: "Masculino",
    };

    console.log("valores:");
    console.log(valores);
    console.log("values:");
    console.log(valoresFinales);
    // try {
    //   const res = await Register(valoresFinales);

    //   if (res && res.status === 200 && res.data) {
    //     setRegister(valoresFinales);
    //     navigation.navigate("MyData" as never);
    //   }
    // } catch (errores) {
    //   console.log(errores);
    // }
  };

  return {
    handleSubmit1,
    handleSubmit2,
  };
};
