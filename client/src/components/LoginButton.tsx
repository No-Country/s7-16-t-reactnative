import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
interface Props {
  text: string;
  onPress: () => void;
}

export const SessionBtn = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.SessionBtn} onPress={onPress}>
      <Text style={styles.normalText}>{text}</Text>
    </TouchableOpacity>
  );
};
export const NormalBtn = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.normalBtn} onPress={onPress}>
      <Text style={styles.normalText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const GoogleBtn = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.googleBtn} onPress={onPress}>
      <Text style={styles.googleText}>{text}</Text>
      <Image
        source={require("../assets/google-logo.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  normalBtn: {
    width: 146,
    height: 36,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    paddingLeft: 8,
    backgroundColor: "hsla(0, 0%, 56%, 1)",
    margin: "5%",
  },
  normalText: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1.25,
    textAlign: "center",
    color: "hsla(0, 0%, 90%, 1)",
    fontWeight: "500",
  },
  googleBtn: {
    position: "relative",
    backgroundColor: "white",
    fontSize: 14,
    width: 244,
    height: 37.91,
    borderRadius: 4,
    letterSpacing: 1.25,
    lineHeight: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "hsla(212, 100%, 38%, 0.5)",
    fontWeight: "500",
  },
  googleText: {
    position: "absolute",
    fontSize: 16,
    left: 39,
    right: 6,
    top: 7,
    color: "hsla(212, 100%, 38%, 1)",
    fontWeight: "500",
  },
  image: {
    position: "absolute",
    top: "6.25%",
    left: "3.69%",
    right: "86.07%",
    bottom: "15.62%",
    width: 30,
    height: 30,
    margin: 0,
    padding: 0,
  },
  SessionBtn: {
    width: 146,
    height: 36,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    backgroundColor: "hsla(200, 95%, 14%, 1)",
  },
});
