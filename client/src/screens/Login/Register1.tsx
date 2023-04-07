import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NormalBtn, GoogleBtn } from "../../components/LoginButton";
import InputComponent2 from "../../components/InputComponent2";
import { FormikProps, Formik } from "formik";
import { registerValidationSchema } from "./registerValidationsSchema";

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
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <ScrollView>
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
                  placeholder="Repite tu Contraseña"
                  type={true}
                />
              </View>
              <View style={styles.buttons}>
                <NormalBtn text="REGISTRARME" onPress={props.handleSubmit} />
                <GoogleBtn
                  text="REGISTRATE CON GOOGLE"
                  onPress={props.handleSubmit}
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
  container: {},
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 140,
    marginBottom: 100,
  },
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
    marginBottom: 27,
  },
});
