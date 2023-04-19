import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { AppButton } from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export const Onboarding2Screen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView className="flex h-full bg-white">
      <View className="flex self-center mb-4 mt-12">
        <Image
          source={require("../../assets/Onboarding/screen2.png")}
          className="self-center mt-40"
        />

        <View className="self-center mt-4">
          <Text className="text-center w-[274]">
            Cuando ingreses al mercado vas a poder
            <Text className="font-bold"> escanear el código de barras </Text>de
            tus productos
          </Text>
          <Image
            source={require("../../assets/Onboarding/nav2.png")}
            className="self-center mt-12"
          />
        </View>
        <View className="self-center mt-32">
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
    </ScrollView>
  );
};
