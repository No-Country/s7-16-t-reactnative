import * as yup from "yup";

export const registerValidationSchema2 = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "· El campo debe contener solo letras")
    .min(3, ({ min }) => `· Ingresa al menos ${min} caracteres!`)
    .required("· El campo no debe estar vacío"),
  lastname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "· El campo debe contener unicamente letras")
    .min(3, ({ min }) => `· Ingresa al menos ${min} caracteres!`)
    .required("· El campo no debe estar vacío"),
  gender: yup.string().required("· El campo no debe estar vacío"),
  documentType: yup.string().required("· El campo no debe estar vacío"),
  documentNumber: yup
    .string()
    .matches(/^[0-9]+$/, "· El campo debe contener solo números")
    .required("· El campo no debe estar vacío"),
  mobile: yup
    .string()
    .matches(/^[0-9]+$/, "· El campo debe contener solo números")
    .min(7, "· El número debe tener al menos 7 dígitos")
    .max(15, "· El número no debe tener más de 15 dígitos")
    .required("· El campo no debe estar vacío"),
  birthdate: yup
    .date()
    .transform((value, originalValue) => {
      // Si el usuario no seleccionó una fecha, originalValue es undefined
      // y no debe ser transformado
      if (originalValue === undefined) {
        return originalValue;
      }
      // Si el usuario seleccionó una fecha, intenta convertirla a un objeto Date
      const date = new Date(originalValue);
      return isNaN(date.getTime()) ? undefined : date;
    })
    .nullable(true)
    .max(new Date(), "· No puede ser posterior a la fecha actual")
    .required("· La fecha de nacimiento es obligatoria")
    .test(
      "isValidDate",
      "· Por favor ingrese una fecha válida",
      (value) => value instanceof Date && !isNaN(value.getTime())
    ),
});
