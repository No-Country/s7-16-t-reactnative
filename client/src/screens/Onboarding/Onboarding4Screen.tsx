import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { AppButton } from "../../components/AppButton";
import { AntDesign } from "@expo/vector-icons";

export const Onboarding4Screen = ({ navigation }) => {
  return (
    <View className="flex self-center bg-white w-full h-full">
      <TouchableOpacity
        className="top-12 left-5"
        onPress={() => navigation.navigate("Onboarding3Name")}
      >
        <AntDesign name="arrowleft" size={24} color="rgba(151, 151, 151, 1)" />
      </TouchableOpacity>
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
          onPress={() => navigation.navigate("MainLogin")}
        />
      </View>
    </View>
  );
};
