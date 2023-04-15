import React from "react";
import { Text, View, Image } from "react-native";
import { AppButton } from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export const Onboarding4Screen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex self-center bg-white w-full h-full">
      <Image
        source={require("../../assets/Onboarding/screen4.png")}
        className="self-center mt-60"
      />

      <View className="self-center mt-4">
        <Text className="text-center w-[274]">
          En la salida del mercado solo
          <Text className="font-bold"> compartís tu comprobante y listo </Text>
        </Text>
        <Image
          source={require("../../assets/Onboarding/nav4.png")}
          className="self-center top-7"
        />
      </View>
      <View className="self-center top-40">
        <AppButton
          text="Comenzar"
          onPress={() => navigation.navigate("LoginStack" as never)}
        />
      </View>
    </View>
  );
};
