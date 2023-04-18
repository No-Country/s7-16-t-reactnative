import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import {
  PrimaryBtn,
  SecondaryBtn,
  IconBtn,
} from "../../components/LoginButton";
import { useNavigation } from "@react-navigation/native";

export const MainLogin = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}> ¡Bienvenido a SmartShop! </Text>
      </View>
      <View>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
        <View style={styles.buttons}>
          <SecondaryBtn
            text="INICIAR SESIÓN"
            onPress={() => navigation.navigate("Login" as never)}
            marginTop={undefined}
            icon={undefined}
            width={undefined}
          />
          <PrimaryBtn
            text="REGISTRARME"
            marginTop={16}
            onPress={() => navigation.navigate("Register1" as never)}
            icon={undefined}
            width={undefined}
          />
          <IconBtn
            icon="google"
            marginTop={24}
            text="REGISTRATE CON GOOGLE"
            onPress={() => navigation.navigate("Register1" as never)}
            width={undefined}
          />
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
