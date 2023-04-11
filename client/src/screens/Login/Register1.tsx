import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { PrimaryBtn, GoogleBtn } from "../../components/LoginButton";
import InputComponent2 from "../../components/InputComponent";
import { FormikProps, Formik } from "formik";
import { registerValidationSchema } from "./registerValidationsSchema";
import { AntDesign } from "@expo/vector-icons";

interface Values {
  email: string;
  password: string;
  password2: string;
}

export const Register1 = ({ navigation }) => {
  const handleSubmit = () => {
    console.log("No hay errores");
    navigation.navigate("Register2");
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
          validationSchema={registerValidationSchema}
          initialValues={{ email: "", password: "", password2: "" }}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<Values>) => (
            <>
              <Text style={styles.title}>
                Estamos felices de que seas parte
              </Text>
              <View style={styles.form}>
                <InputComponent2
                  name="email"
                  style={styles.input}
                  placeholder="Mail"
                />
                <InputComponent2
                  name="password"
                  style={styles.input}
                  placeholder="Contraseña"
                  type={true}
                />
                <InputComponent2
                  name="password2"
                  style={styles.input}
                  placeholder="Repite tu contraseña"
                  type={true}
                />
              </View>
              <View style={styles.buttons}>
                <PrimaryBtn
                  width={135}
                  text="REGISTRARME"
                  onPress={props.handleSubmit}
                />
                <PrimaryBtn
                  icon="google"
                  width={244}
                  marginTop={24}
                  text="REGISTRATE CON GOOGLE"
                  onPress={() => navigation.navigate("Register1")}
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
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 118,
    marginBottom: 100,
  },
});
