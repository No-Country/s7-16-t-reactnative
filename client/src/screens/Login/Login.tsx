import { Text, View, StyleSheet, TextInput } from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.title}>¡Te damos la bienvenida!</Text>
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
                label="email"
                style={styles.input}
                placeholder="Email"
              />
              <InputComponent
                name="password"
                label="password"
                style={styles.input}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "5%",
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 140,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: "5%",
    marginBottom: "15%",
  },
  input: {
    width: 312,
    height: 52,
    margin: 10,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 3.5,
    alignSelf: "center",
    padding: 15,
  },
  question: {
    fontSize: 12,
    fontWeight: "300",
    color: "hsla(212, 100%, 38%, 1)",
    marginLeft: 30,
    textDecorationLine: "underline",
  },
});
