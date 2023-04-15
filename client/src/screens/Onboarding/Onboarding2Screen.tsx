import React from "react";
import { Text, View, Image } from "react-native";
import { AppButton } from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export const Onboarding2Screen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex self-center bg-white w-full h-full">
      <Image
        source={require("../../assets/Onboarding/screen2.png")}
        className="self-center mt-60"
      />

      <View className="self-center mt-4">
        <Text className="text-center w-[274]">
          Cuando ingreses al mercado vas a poder
          <Text className="font-bold"> escanear el código de barra </Text>de tus
          productos
        </Text>
        <Image
          source={require("../../assets/Onboarding/nav2.png")}
          className="self-center top-7"
        />
      </View>
      <View className="self-center top-36">
        <AppButton
          text="Siguiente"
          onPress={() => navigation.navigate("Onboarding3Screen" as never)}
        />
        <Text
          className="text-center m-3"
          onPress={() => navigation.navigate("LoginStack" as never)}
        >
          Saltar presentación
        </Text>
      </View>
    </View>
  );
};
