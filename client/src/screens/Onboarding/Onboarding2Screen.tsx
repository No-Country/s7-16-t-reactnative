import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { AppButton } from "../../components/AppButton";
import { AntDesign } from "@expo/vector-icons";

export const Onboarding2Screen = ({ navigation }) => {
  return (
    <View className="flex self-center bg-white w-full h-full">
      <TouchableOpacity
        className="top-12 left-5"
        onPress={() => navigation.navigate("Onboarding1Name")}
      >
        <AntDesign name="arrowleft" size={24} color="rgba(151, 151, 151, 1)" />
      </TouchableOpacity>
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
          onPress={() => navigation.navigate("Onboarding3Name")}
        />
        <Text
          className="text-center m-3"
          onPress={() => navigation.navigate("MainLogin")}
        >
          Saltar presentación
        </Text>
      </View>
    </View>
  );
};
