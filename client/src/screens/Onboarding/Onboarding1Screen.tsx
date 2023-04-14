import React from "react";
import { Text, View, TouchableWithoutFeedback, Image } from "react-native";
import { AppButton } from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export const Onboarding1Screen = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Onboarding2Name")}
    >
      <View className="flex self-center bg-white w-full h-full">
        <Image
          source={require("../../assets/logosmall.png")}
          className="self-center mt-60 mb-20"
        />
        <View>
          <Text className="text-center font-bold scale-150 top-6">
            ¡Bienvenid@ a SmartShop!
          </Text>
        </View>

        <View className="m-20">
          <Text className="text-center w-[246] bottom-10">
            Te presentamos cómo funciona esta nueva experiencia de compra
          </Text>
          <Image
            source={require("../../assets/Onboarding/nav1.png")}
            className="self-center bottom-6"
          />
        </View>
        <View className="self-center top-30 mt-5">
          <AppButton
            text="Siguiente"
            onPress={() => navigation.navigate("Onboarding2Name")}
          />
          <Text
            className="text-center m-3"
            onPress={() => navigation.navigate("MainLogin")}
          >
            Saltar presentación
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
