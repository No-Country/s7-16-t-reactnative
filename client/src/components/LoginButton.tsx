import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  width: number | undefined;
  marginTop: number | undefined;
  text: string;
  icon: string | undefined;
  onPress: () => void;
}

export const SecundaryBtn = ({
  marginTop = 0,
  width = 328,
  text,
  icon = undefined,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      className={"bg-secundario"}
      style={styles.secundaryBtn(width, marginTop)}
      onPress={onPress}
    >
      <View>
        <Text className={"text-primario"} style={styles.secundaryBtnText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export const PrimaryBtn = ({
  marginTop = 0,
  width = 328,
  text,
  icon = undefined,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      className="bg-primario"
      style={styles.primaryBtn(width, marginTop)}
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
        {icon === "google" && (
          <AntDesign name="google" size={23} color="rgba(10, 76, 134, 1)" />
        )}
        <Text className={"color-secundario"} style={styles.primaryBtnText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export const GuardarBtn = ({
  marginTop = 0,
  width = 328,
  text,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      className={"bg-acento"}
      style={styles.primaryBtn(width, marginTop)}
      onPress={onPress}
    >
      <View>
        <Text className={"text-white"} style={styles.secundaryBtnText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  secundaryBtn: (width, marginTop) => ({
    width: width,
    height: 36,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    paddingLeft: 8,
    marginTop: marginTop,
  }),
  secundaryBtnText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 1.25,
  },
  primaryBtn: (width, marginTop) => ({
    width: width,
    height: 36,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    paddingLeft: 8,
    marginTop: marginTop,
  }),
  primaryBtnText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    textAlign: "center",
    letterSpacing: 1.25,
  },
});
