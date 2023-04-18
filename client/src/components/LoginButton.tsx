import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  width: number | undefined;
  marginTop: number | undefined;
  text: string;
  icon: string | undefined;
  onPress: () => void;
}

export const SecondaryBtn = ({
  marginTop = 0,
  width = 328,
  text,
  icon = undefined,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      className={"bg-secundario"}
      style={styles.secondaryBtn(width, marginTop)}
      onPress={onPress}
    >
      <View>
        <Text className={"text-primario"} style={styles.secondaryBtnText}>
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
        <Text className={"color-secundario"} style={styles.primaryBtnText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const IconBtn = ({
  width = 328,
  marginTop = 0,
  text,
  icon = undefined,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.iconBtn(width, marginTop)}
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
          <Image
            style={styles.image}
            source={require("../assets/google-logo.png")}
          />
        )}
        <Text className={"color-secundario"} style={styles.iconBtnText}>
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

const commonBtn = {
  width: "100%",
  height: "auto",
  alignItems: "center",
  justifyContent: "center",
  padding: 10,
  paddingLeft: 14,
  paddingRight: 14,
  borderRadius: 20,
};

const commonText = {
  fontSize: 14,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 16,
  textAlign: "center",
  letterSpacing: 1.25,
};

const styles = StyleSheet.create({
  secondaryBtn: (width, marginTop) => ({
    ...commonBtn,
    marginTop: marginTop,
  }),
  secondaryBtnText: {
    ...commonText,
  },
  primaryBtn: (width, marginTop) => ({
    ...commonBtn,
    marginTop: marginTop,
  }),
  primaryBtnText: {
    ...commonText,
  },
  iconBtn: (width, marginTop) => ({
    ...commonBtn,
    marginTop: marginTop,
    padding: 10,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#80ace0",
  }),
  iconBtnText: {
    ...commonText,
    color: "#005ac2",
  },
  image: {
    alignSelf: "center",
    height: 20,
    width: 20,
  },
});
