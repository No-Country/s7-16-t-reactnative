import React from "react";
import { View, Image, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

export const useStack = () => {
  const headerTitleSinBack = () => (
    <View
      style={{
        alignItems: "center",
        width: windowWidth - 30,
      }}
    >
      <Image
        source={require("../assets/logo-sin-margenes.png")}
        style={{
          height: 40,
          resizeMode: "contain",
        }}
      />
    </View>
  );

  const headerTitleConBack = () => (
    <View
      style={{
        alignItems: "center",
        width: windowWidth - 140,
      }}
    >
      <Image
        source={require("../assets/logo-sin-margenes.png")}
        style={{
          height: 40,
          resizeMode: "contain",
        }}
      />
    </View>
  );

  return { headerTitleSinBack, headerTitleConBack };
};
