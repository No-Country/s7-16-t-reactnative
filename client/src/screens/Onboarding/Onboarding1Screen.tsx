import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { AppButton } from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export const Onboarding1Screen = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Onboarding2Name")}
    >
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} />
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.textTitle}>
            ¡Bienvenid@ a “Supermercado sin fila”!
          </Text>
        </View>

        <View style={{ width: 222, height: 32, marginBottom: 50 }}>
          <Text style={styles.textsubTitle}>
            Te presentamos cómo funciona esta nueva experiencia de compra
          </Text>
        </View>
        <View>
          <AppButton
            text="Siguiente"
            onPress={() => navigation.navigate("Onboarding4Name")}
          />
          <Text style={styles.textFooter}>Saltar presentación</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    borderWidth: 1,
    backgroundColor: "#EBE9E9",
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  textLogo: {
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 23,
    color: "#000000",
    fontFamily: "Roboto",
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 19,
    textAlign: "center",
    marginBottom: 20,
  },
  textsubTitle: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    textAlign: "center",
  },
  textFooter: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#000000",
    textAlign: "center",
  },
});
