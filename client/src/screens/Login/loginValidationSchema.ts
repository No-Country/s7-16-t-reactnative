import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("· Correo electrónico inválido")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/g,
      "Correo electrónico inválido"
    )
    .required("· El campo no debe estar vacio"),
  password: yup.string().required("· El campo no debe estar vacio"),
});
