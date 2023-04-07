import {
  ScrollView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import { SessionBtn } from "../../components/LoginButton";
import { FormikProps, Formik } from "formik";
import { loginValidationSchema } from "./loginValidationSchema";
import InputComponent from "../../components/InputComponent";

interface Values {
  email: string;
  password: string;
}

export const Login = ({ navigation }) => {
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
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props: FormikProps<Values>) => (
              <>
                <View>
                  <InputComponent
                    name="email"
                    style={styles.input1}
                    placeholder="Mail"
                  />
                  <InputComponent
                    name="password"
                    style={styles.input2}
                    placeholder="Contraseña"
                    typePassword={true}
                  />
                </View>
                <Text style={styles.question}>¿Olvidaste la constraseña?</Text>
                <View style={styles.buttons}>
                  <SessionBtn
                    text="INICIAR SESIÓN"
                    onPress={() => navigation.navigate("Home")}
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
  input1: {
    width: "88%",
    height: 52,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 3.5,
    alignSelf: "center",
    marginBottom: 17,
  },
  input2: {
    width: "88%",
    height: 52,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 3.5,
    alignSelf: "center",
    marginBottom: 17,
  },
  question: {
    fontSize: 12,
    fontWeight: "300",
    color: "#005AC2",
    marginLeft: 25,
    textDecorationLine: "underline",
    marginTop: 9,
    lineHeight: 14,
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 219,
    marginBottom: 162,
  },
});
