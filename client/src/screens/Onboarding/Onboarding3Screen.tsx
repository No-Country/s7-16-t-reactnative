import React from "react";
import { Text, View, Image } from "react-native";
import { AppButton } from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export const Onboarding3Screen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex self-center bg-white w-full h-full">
      <Image
        source={require("../../assets/Onboarding/screen3.png")}
        className="self-center mt-60"
      />

      <View className="self-center mt-4">
        <Text className="text-center w-[274]">
          Una vez cargador en la app, podrás
          <Text className="font-bold"> pagar a través del carrito </Text>
        </Text>
        <Image
          source={require("../../assets/Onboarding/nav3.png")}
          className="self-center top-7"
        />
      </View>
      <View className="self-center top-40">
        <AppButton
          text="Siguiente"
          onPress={() => navigation.navigate("Onboarding4Screen" as never)}
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
