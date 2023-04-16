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
import { FormikProps, Formik } from "formik";
import { registerValidationSchema } from "./registerValidationsSchema";
import { useRegister } from "../../hooks/useRegister";
import { useNavigation } from "@react-navigation/native";
interface Values {
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register1 = () => {
  const navigation = useNavigation();
  const { handleSubmit1 } = useRegister();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <ScrollView keyboardShouldPersistTaps="always">
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSubmit1 as never}
        >
          {(props: FormikProps<Values>) => (
            <>
              <Text style={styles.title}>
                Estamos felices de que seas parte
              </Text>
              <View style={styles.form}>
                <InputComponent
                  name="email"
                  style={styles.input}
                  placeholder="Mail"
                  inputMode="email"
                />
                <InputComponent
                  name="password"
                  style={styles.input}
                  placeholder="Contraseña"
                  type={true}
                  inputMode="text"
                />
                <InputComponent
                  name="confirmPassword"
                  style={styles.input}
                  placeholder="Repite tu contraseña"
                  type={true}
                  inputMode="text"
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
                <PrimaryBtn
                  icon="google"
                  width={244}
                  marginTop={24}
                  text="REGISTRATE CON GOOGLE"
                  onPress={() => navigation.navigate("Register1" as never)}
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
    paddingLeft: 15,
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 118,
    marginBottom: 100,
  },
});
