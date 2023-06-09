import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
}

export const AppButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: 328,
    height: 39,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "rgba(251, 133, 0, 1)",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Roboto",
    color: "#ffff",
    fontWeight: "400",
    lineHeight: 19,
    // width: 67,
    height: 21,
  },
});
