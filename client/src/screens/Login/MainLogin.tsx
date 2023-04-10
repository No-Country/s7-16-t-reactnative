import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { WhiteBtn, GoogleBtn, OrangeBtn } from "../../components/LoginButton";

export const MainLogin = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/logo-sin-margenes.png")}
        />
        <View style={styles.buttons}>
          <OrangeBtn
            text="Iniciar sesión"
            onPress={() => navigation.navigate("Login")}
          />
          <WhiteBtn
            text="Crear cuenta"
            marginTop={10}
            onPress={() => navigation.navigate("Register1")}
          />
          <View style={styles.view}>
            <View style={styles.linea} />
            <Text style={styles.text}> O continúa con </Text>
            <View style={styles.linea} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <WhiteBtn
              icon="google"
              width={156}
              marginTop={10}
              text="Google"
              onPress={() => navigation.navigate("Register1")}
            />
            <WhiteBtn
              icon="facebook"
              width={156}
              marginTop={10}
              text="Facebook"
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
    marginTop: 205,
    alignSelf: "center",
    height: 92,
    width: 188,
  },
  buttons: {
    marginTop: 62,
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
    fontSize: 16,
  },
});
