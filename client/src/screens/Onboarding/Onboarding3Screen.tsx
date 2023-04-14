import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { AppButton } from "../../components/AppButton";
import { AntDesign } from "@expo/vector-icons";

export const Onboarding3Screen = ({ navigation }) => {
  return (
    <View className="flex self-center bg-white w-full h-full">
      <TouchableOpacity
        className="top-12 left-5"
        onPress={() => navigation.navigate("Onboarding2Name")}
      >
        <AntDesign name="arrowleft" size={24} color="rgba(151, 151, 151, 1)" />
      </TouchableOpacity>
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
          onPress={() => navigation.navigate("Onboarding4Name")}
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
