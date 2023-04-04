import { Text, View, StyleSheet, TextInput } from "react-native";
import { SessionBtn } from "../../components/LoginButton";

export const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Te damos la bienvenida!</Text>
      <View>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Contraseña" />
      </View>
      <Text style={styles.question}>¿Olvidaste la constraseña?</Text>
      <View style={styles.buttons}>
        <SessionBtn
          text="INICIAR SESIÓN"
          onPress={() => navigation.navigate("Home")}
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
  question: {
    fontSize: 12,
    fontWeight: "300",
    color: "hsla(212, 100%, 38%, 1)",
    marginLeft: 30,
    textDecorationLine: "underline",
  },
});
