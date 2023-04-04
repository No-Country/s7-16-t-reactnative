import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";

export const Onboarding4Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.textLogo}>ILUSTRACIÓN</Text>
      </View>
      <View style={{ marginBottom: 150, width: 274, height: 32 }}>
        <Text style={styles.textsubTitle}>
          En la salida del mercado solo
          <Text style={{ fontWeight: "600" }}>
            {" "}
            compartís tu comprobante y listo{" "}
          </Text>
        </Text>
      </View>
      <View>
        <AppButton
          text="Comenzar"
          onPress={() => navigation.navigate("MainLogin")}
        />
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
