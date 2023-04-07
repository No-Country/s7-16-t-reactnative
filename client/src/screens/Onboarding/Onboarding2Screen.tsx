import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppButton } from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export const Onboarding2Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.textLogo}>ILUSTRACIÓN</Text>
      </View>

      <View style={{ marginBottom: 150, width: 274, height: 48 }}>
        <Text style={styles.textsubTitle}>
          Cuando ingreses al mercado vas a poder
          <Text style={{ fontWeight: "600" }}>
            {" "}
            escanear el código de barras{" "}
          </Text>
          de tus productos
        </Text>
      </View>

      <View>
        <AppButton
          text="Siguiente"
          onPress={() => navigation.navigate("Onboarding3Screen" as never)}
        />
        <TouchableOpacity>
          <Text style={styles.textFooter}>Saltar presentación</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginTop: 15,
  },
});
