import {
  ScrollView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import { SecundaryBtn } from "../../components/LoginButton";
import { FormikProps, Formik } from "formik";
import { loginValidationSchema } from "./loginValidationSchema";
import InputComponent2 from "../../components/InputComponent";
import { AntDesign } from "@expo/vector-icons";

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
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <ScrollView>
        <AntDesign
          style={styles.back}
          name="arrowleft"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Image style={styles.image} source={require("../../assets/logo.png")} />
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
                    ¿Olvidaste tu constraseña?
                  </Text>
                </View>
                <View style={styles.buttons}>
                  <SecundaryBtn
                    width={136}
                    text="INICIAR SESION"
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
  container: { backgroundColor: "white", flex: 1 },
  back: { top: 43, left: "6%" },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 89,
    marginLeft: 19,
  },
  form: {
    marginTop: 32,
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
  question: {
    position: "absolute",
    fontStyle: "normal",
    fontSize: 12,
    fontWeight: "300",
    lineHeight: 14,
    bottom: -16,
    left: 28,
    zIndex: 10,
    color: "rgba(0, 90, 194, 1)",
    textDecorationLine: "underline",
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 209 - 18,
    marginBottom: 100,
  },
  image: {
    marginTop: 99,
    alignSelf: "center",
    height: 142,
    width: 226,
  },
});
