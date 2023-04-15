import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { PrimaryBtn } from "../../components/LoginButton";
import InputComponent from "../../components/InputComponent";
import PickerComponent from "../../components/PickerComponent";
import { FormikProps, Formik } from "formik";
import { registerValidationSchema2 } from "./registerValidationsSchema2";
import { AntDesign } from "@expo/vector-icons";
import DateTimePickerComponent from "../../components/DatePickerComponent";
import { useRegister } from "../../hooks/useRegister";
import { useNavigation } from "@react-navigation/native";

interface itemList {
  id: number;
  nombre: string;
}

const documentTypes: itemList[] = [
  { id: 1, nombre: "DNI-Argentina" },
  { id: 2, nombre: "CURP-México" },
  { id: 3, nombre: "RUT-Chile" },
  { id: 4, nombre: "CI-Uruguay" },
  { id: 5, nombre: "DPI-Guatemala" },
  { id: 6, nombre: "CPF-Brasil" },
  { id: 7, nombre: "INE-Honduras" },
  { id: 8, nombre: "DUI-El Salvador" },
  { id: 9, nombre: "IFE-México" },
  { id: 10, nombre: "DNI-Perú" },
];

const genres: itemList[] = [
  { id: 1, nombre: "Masculino" },
  { id: 2, nombre: "Femenino" },
  { id: 3, nombre: "No binario" },
];
interface Values {
  firstName: string;
  lastName: string;
  genre: string;
  dni: string;
  documentType: string;
  phNumber: string;
  birthdate: string;
}

export const Register2 = () => {
  const navigation = useNavigation();
  const { handleSubmit2 } = useRegister();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <ScrollView keyboardShouldPersistTaps="always">
        <AntDesign
          style={styles.back}
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Formik
          validationSchema={registerValidationSchema2}
          initialValues={{
            firstName: "",
            lastName: "",
            genre: "",
            dni: "",
            documentType: "",
            phNumber: "",
            birthdate: "",
          }}
          onSubmit={handleSubmit2 as never}
        >
          {(props: FormikProps<Values>) => (
            <>
              <Text style={styles.title}>
                Estamos felices de que seas parte
              </Text>
              <View>
                <InputComponent
                  name="firstName"
                  style={styles.input}
                  placeholder="Nombre"
                  inputMode="text"
                />
                <InputComponent
                  name="lastName"
                  style={styles.input}
                  placeholder="Apellido"
                  inputMode="text"
                />
                <PickerComponent
                  name="documentType"
                  style={styles.input}
                  placeholder="Tipo de Documento"
                  label="Tipo de documento"
                  list={documentTypes}
                  isSubmmiting={props.submitCount}
                />
                <InputComponent
                  name="dni"
                  style={styles.input}
                  placeholder="Numero de Documento"
                  inputMode="decimal"
                />
                <PickerComponent
                  name="genre"
                  style={styles.input}
                  placeholder="Sexo"
                  label="Sexo"
                  list={genres}
                  isSubmmiting={props.submitCount}
                />
                <DateTimePickerComponent
                  name="birthdate"
                  label="Fecha de Nacimiento"
                  mode="date"
                />
                <InputComponent
                  name="phNumber"
                  style={styles.input}
                  placeholder="Numero de Celular"
                  inputMode="decimal"
                />
              </View>
              <View style={styles.buttons}>
                <PrimaryBtn
                  width={135}
                  text="REGISTRARME"
                  onPress={props.handleSubmit}
                  marginTop={undefined}
                  icon={undefined}
                />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  back: { position: "absolute", top: 43, left: "6%" },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 89,
    marginLeft: 19,
    marginBottom: 30,
  },
  form: {
    marginTop: 130,
  },
  input: {
    width: "88%",
    height: 52,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 3.5,
    alignSelf: "center",
    marginBottom: 20,
    paddingLeft: 15,
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 29,
    marginBottom: 72,
  },
});
