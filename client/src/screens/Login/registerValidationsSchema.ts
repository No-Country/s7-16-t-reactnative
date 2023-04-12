import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/g,
      "Correo electrónico inválido"
    )
    .required("· El campo no debe estar vacio"),
  password: yup
    .string()
    .min(
      7,
      ({ min }) => `· Tu contraseña debe tener al menos ${min} caracteres`
    )
    .required("· El campo no debe estar vacío"),
  password2: yup
    .string()
    .min(
      7,
      ({ min }) => `· Tu contraseña debe tener al menos ${min} caracteres`
    )
    .required("· El campo no debe estar vacío")
    .oneOf([yup.ref("password"), null], "· Las contraseñas no coinciden")
    .required("· El campo no debe estar vacío"),
});
