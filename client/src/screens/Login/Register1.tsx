import { Text, View, StyleSheet, TextInput } from "react-native";
import { NormalBtn, GoogleBtn } from "../../components/LoginButton";
import { useNavigation } from "@react-navigation/native";

export const Register1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estamos felices de que seas parte</Text>
      <View>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Contraseña" />
        <TextInput style={styles.input} placeholder="Confirmar Contraseña" />
      </View>
      <View style={styles.buttons}>
        <NormalBtn
          text="REGISTRARME"
          onPress={() => navigation.navigate("Register2" as never)}
        />
        <GoogleBtn
          text="REGISTRATE CON GOOGLE"
          onPress={() => navigation.navigate("Register2" as never)}
        />
      </View>
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
});
