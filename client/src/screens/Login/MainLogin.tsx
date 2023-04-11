import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import {
  PrimaryBtn,
  GoogleBtn,
  SecundaryBtn,
} from "../../components/LoginButton";

export const MainLogin = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}> ¡Bienvenido a SmartShop! </Text>
      </View>
      <View>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
        <View style={styles.buttons}>
          <SecundaryBtn
            width={146}
            text="INICIAR SESION"
            onPress={() => navigation.navigate("Login")}
          />
          <PrimaryBtn
            text="REGISTRARME"
            width={146}
            marginTop={16}
            onPress={() => navigation.navigate("Register1")}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <PrimaryBtn
              icon="google"
              width={244}
              marginTop={24}
              text="REGISTRATE CON GOOGLE"
              onPress={() => navigation.navigate("Register1")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    marginTop: 25,
    alignSelf: "center",
    height: 179,
    width: 284,
  },
  buttons: {
    marginTop: 189,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  linea: {
    width: 106,
    height: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  view: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 16,
  },
  text: {
    marginTop: 60,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "500",
    fontStyle: "normal",
    textTransform: "capitalize",
    paddingTop: 15,
    paddingBottom: 14,
  },
});
