import * as yup from "yup";

export const registerValidationSchema2 = yup.object().shape({
  firstname: yup
    .string()
    .min(
      3,
      ({ min }) => `Nombre muy corto. Debe tener al menos ${min} caracteres!`
    )
    .required("El campo no debe estar vacío"),
  lastname: yup
    .string()
    .min(
      3,
      ({ min }) => `Apellido muy corto. Debe tener al menos ${min} caracteres!`
    )
    .required("El campo no debe estar vacío"),
  gender: yup.string().required("El campo no debe estar vacío"),
  documentType: yup.string().required("El campo no debe estar vacío"),
  documentNumber: yup.string().required("El campo no debe estar vacío"),
  mobile: yup.string().required("El campo no debe estar vacío"),
  birthdate: yup.string().required("El campo no debe estar vacío"),
});
