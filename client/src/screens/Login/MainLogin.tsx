import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { NormalBtn, GoogleBtn, SessionBtn } from "../../components/LoginButton";
import { useNavigation } from "@react-navigation/native";

export const MainLogin = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido a SmartShop!</Text>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
        <View style={styles.buttons}>
          <SessionBtn
            text="INICIAR SESIÓN"
            onPress={() => navigation.navigate("Login" as never)}
          />
          <NormalBtn
            text="REGISTRARME"
            onPress={() => navigation.navigate("Register1" as never)}
          />
          <GoogleBtn
            text="REGISTRATE CON GOOGLE"
            onPress={() => navigation.navigate("Register1" as never)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "5%",
    height: 800,
  },
  buttons: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 189,
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "500",
    marginTop: 89,
    height: 53,
  },
  image: {
    top: 40,
    alignSelf: "center",
    height: 179,
    width: 284,
  },
});
