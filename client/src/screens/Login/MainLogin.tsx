import { Text, View, StyleSheet, Image } from "react-native";
import { NormalBtn, GoogleBtn, SessionBtn } from "../../components/LoginButton";

export const MainLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a SmartShop!</Text>
      <Image source={require("../../assets/logo.png")} style={{ margin: 40 }} />
      <View style={styles.buttons}>
        <SessionBtn
          text="INICIAR SESIÓN"
          onPress={() => navigation.navigate("Login")}
        />
        <NormalBtn
          text="REGISTRARME"
          onPress={() => navigation.navigate("Register1")}
        />
        <GoogleBtn
          text="REGISTRATE CON GOOGLE"
          onPress={() => navigation.navigate("Register1")}
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
    marginTop: 150,
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "500",
    marginTop: "5%",
  },
});
