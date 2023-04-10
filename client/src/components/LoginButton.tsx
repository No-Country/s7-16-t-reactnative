import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
interface Props {
  width: number | undefined;
  marginTop: number | undefined;
  text: string;
  onPress: () => void;
}

export const OrangeBtn = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity
      className={"bg-acento"}
      style={styles.orangeBtn}
      onPress={onPress}
    >
      <View>
        <Text style={styles.orangeBtnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export const WhiteBtn = ({ marginTop = 0, width = 328, text, onPress }: Props) => {
  return (
    <TouchableOpacity
      className={"bg-white border-azulLogo"}
      style={styles.whiteBtn(width, marginTop)}
      onPress={onPress}
    >
      <Text className={"color-azulLogo"} style={styles.whiteBtnText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  orangeBtn: {
    width: 328,
    height: 51,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  orangeBtnText: {
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 19,
    textAlign: "center",
    color: "white",
  },
  whiteBtn: (width, marginTop) => ({
    width: width,
    height: 51,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    paddingLeft: 8,
    borderWidth: 1,
    marginTop: marginTop,
  }),
  whiteBtnText: {
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 19,
    textAlign: "center",
  },
});
