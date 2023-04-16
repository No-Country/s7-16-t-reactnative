import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { AppButton } from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export const Onboarding3Screen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView className="flex h-full bg-white">
      <View className="flex self-center mb-4 mt-12">
        <Image
          source={require("../../assets/Onboarding/screen3.png")}
          className="self-center mt-44"
        />

        <View className="self-center mt-4">
          <Text className="text-center w-[274]">
            Una vez cargador en la app, podrás
            <Text className="font-bold"> pagar a través del carrito </Text>
          </Text>
          <Image
            source={require("../../assets/Onboarding/nav3.png")}
            className="self-center mt-12"
          />
        </View>
        <View className="self-center mt-32">
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
    </ScrollView>
  );
};
