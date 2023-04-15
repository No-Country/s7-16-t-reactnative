import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
  disabled: boolean;
}

export const OrangeButton = ({ text, onPress, disabled }: Props) => {
  return (
    <TouchableOpacity
      style={
        disabled
          ? { backgroundColor: "#FB8500" }
          : { backgroundColor: "rgba(251, 133, 0, 0.5)" }
      }
      className={"rounded-2xl py-2 px-3"}
      aria-disabled={!disabled}
      onPress={onPress}
    >
      <Text className="uppercase text-white text-center font-medium text-sm tracking-widest">
        {text}
      </Text>
    </TouchableOpacity>
  );
};
