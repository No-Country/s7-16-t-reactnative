import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { WhiteBtn } from "../../components/LoginButton";
import InputComponent2 from "../../components/InputComponent";
import { FormikProps, Formik } from "formik";
import { registerValidationSchema2 } from "./registerValidationsSchema2";
import { AntDesign } from "@expo/vector-icons";

interface Values {
  firstname: string;
  lastname: string;
  gender: string;
  documentType: string;
  documentNumber: string;
  mobile: string;
  birthdate: string;
}

export const Register2 = ({ navigation }) => {
  const handleSubmit = () => {
    console.log("No hay errores");
    navigation.navigate("MyData");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <ScrollView>
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
            firstname: "",
            lastname: "",
            gender: "",
            documentNumber: "",
            documentType: "",
            mobile: "",
            birthdate: "",
          }}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<Values>) => (
            <>
              <Text style={styles.title}>
                Estamos felices de que seas parte
              </Text>
              <View>
                <InputComponent2
                  name="firstname"
                  style={styles.input}
                  placeholder="Nombre"
                />
                <InputComponent2
                  name="lastname"
                  style={styles.input}
                  placeholder="Apellido"
                />
                <InputComponent2
                  name="documentType"
                  style={styles.input}
                  placeholder="Tipo de Documento"
                />
                <InputComponent2
                  name="documentNumber"
                  style={styles.input}
                  placeholder="Numero de Documento"
                />
                <InputComponent2
                  name="gender"
                  style={styles.input}
                  placeholder="Sexo"
                />
                <InputComponent2
                  name="birthdate"
                  style={styles.input}
                  placeholder="Fecha de Nacimiento"
                />
                <InputComponent2
                  name="mobile"
                  style={styles.input}
                  placeholder="Numero de Celular"
                />
              </View>
              <View style={styles.buttons}>
                <WhiteBtn text="REGISTRARME" onPress={props.handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
  back: { top: 43, left: "6%" },
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
    marginBottom: 18,
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 29,
    marginBottom: 72,
  },
});
