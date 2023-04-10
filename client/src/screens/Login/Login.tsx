import {
  ScrollView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import { OrangeBtn } from "../../components/LoginButton";
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
          color="rgba(10, 76, 134, 1)"
        />
        <Image
          style={styles.image}
          source={require("../../assets/logo-sin-margenes.png")}
        />
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
                    placeholder="Usuario"
                  />
                  <InputComponent2
                    name="password"
                    style={styles.input}
                    placeholder="Contraseña"
                    type={true}
                  />
                  <Text className="color-azulLogo" style={styles.question}>
                    ¿Olvidó su constraseña?
                  </Text>
                </View>
                <View style={styles.buttons}>
                  <OrangeBtn
                    text="Iniciar sesion"
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
    marginTop: 62,
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
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    bottom: -16,
    left: 28,
    zIndex: 10,
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 67,
    marginBottom: 100,
  },
  image: {
    marginTop: 205 - 32,
    alignSelf: "center",
    height: 92,
    width: 188,
  },
});
