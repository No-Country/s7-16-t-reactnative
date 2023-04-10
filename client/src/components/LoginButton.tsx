import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
interface Props {
  width: number | undefined;
  marginTop: number | undefined;
  text: string;
  icon: string | undefined;
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
export const WhiteBtn = ({
  marginTop = 0,
  width = 328,
  text,
  icon = undefined,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      className={"bg-white border-azulLogo"}
      style={styles.whiteBtn(width, marginTop)}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        {icon === "google" && <Icon name="google" size={23} color="rgba(10, 76, 134, 1)" />}
        {icon === "facebook" && <Icon name="facebook" size={23} color="rgba(10, 76, 134, 1)" />}
        <Text className={"color-azulLogo"} style={styles.whiteBtnText}>
          {text}
        </Text>
      </View>
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
