import {
  ScrollView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { SessionBtn } from "../../components/LoginButton";
import { FormikProps, Formik } from "formik";
import { loginValidationSchema } from "./loginValidationSchema";
import InputComponent2 from "../../components/InputComponent2";

interface Values {
  email: string;
  password: string;
}

export const Login = ({ navigation }) => {
  const handleSubmit = () => {
    console.log("No hay errores");
    navigation.navigate("MyData");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <ScrollView>
        <Text style={styles.title}>¡Te damos la bienvenida!</Text>
        <View style={styles.form}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
          >
            {(props: FormikProps<Values>) => (
              <>
                <View>
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
                  <Text style={styles.question}>
                    ¿Olvidaste la constraseña?
                  </Text>
                </View>
                <View style={styles.buttons}>
                  <SessionBtn
                    text="INICIAR SESIÓN"
                    onPress={props.handleSubmit}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
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
  question: {
    position: "absolute",
    fontSize: 12,
    fontWeight: "300",
    color: "#005AC2",
    textDecorationLine: "underline",
    lineHeight: 14,
    bottom: -22,
    left: 28,
    zIndex: 10,
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 219,
    marginBottom: 162,
  },
});
