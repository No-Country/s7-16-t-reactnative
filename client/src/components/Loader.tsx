import React from "react";
import { ActivityIndicator, View } from "react-native";

interface Props {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
        display: isLoading ? "flex" : "none",
      }}
    >
      <ActivityIndicator color="rgba(251, 133, 0, 1)" size={100} />
    </View>
  );
};
