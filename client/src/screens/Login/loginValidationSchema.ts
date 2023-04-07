import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Debes ingresar un email valido")
    .required("El campo no debe estar vacio"),
  password: yup.string().required("El campo no debe estar vacio"),
});
