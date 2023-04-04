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
      <Text style={styles.googleText}>
        <Image
          source={require("../assets/google-logo.png")}
          style={styles.image}
        />
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  normalBtn: {
    width: 135,
    height: 36,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    backgroundColor: "hsla(0, 0%, 56%, 1)",
    margin: "5%",
  },
  normalText: {
    fontSize: 14,
    textAlign: "center",
    color: "hsla(0, 0%, 90%, 1)",
    fontWeight: "500",
  },
  googleBtn: {
    width: 265,
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "hsla(212, 100%, 38%, 0.5)",
  },
  googleText: {
    fontSize: 14,
    textAlign: "center",
    color: "hsla(212, 100%, 38%, 1)",
    fontWeight: "500",
  },
  image: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },
  SessionBtn: {
    width: 135,
    height: 36,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    backgroundColor: "hsla(200, 95%, 14%, 1)",
  },
});
