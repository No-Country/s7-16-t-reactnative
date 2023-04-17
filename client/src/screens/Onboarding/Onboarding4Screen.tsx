import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { AppButton } from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export const Onboarding4Screen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView className="flex h-full bg-white">
      <View className="flex self-center mb-14 mt-12">
        <Image
          source={require("../../assets/Onboarding/screen4.png")}
          className="self-center mt-44"
        />

        <View className="self-center mt-4">
          <Text className="text-center w-[274]">
            En la salida del mercado solo
            <Text className="font-bold">
              {" "}
              compartís tu comprobante y listo{" "}
            </Text>
          </Text>
          <Image
            source={require("../../assets/Onboarding/nav4.png")}
            className="self-center mt-12"
          />
        </View>
        <View className="self-center mt-32">
          <AppButton
            text="Comenzar"
            onPress={() => navigation.navigate("LoginStack" as never)}
          />
        </View>
      </View>
    </ScrollView>
  );
};
