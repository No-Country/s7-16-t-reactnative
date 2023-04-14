import React from "react";
import { Text, View, Image } from "react-native";
import { NavigateButton } from "../../components/NavigateButton";

export const PerfilScreen = ({ navigation }) => {
  return (
    <>
      <View className="flex-1 container mx-auto py-10 items-center bg-white w-full h-full">
        <Image
          source={require("../../assets/logo.png")}
          className="w-[129] h-[61] mb-14"
        />

        <View className="justify-center items-center mb-14">
          <Image
            source={require("../../assets/perfil.png")}
            className="w-[84] h-[84] rounded-full mb-3"
          />
          <Text className="uppercase tracking-widest font">perfil</Text>
        </View>

        <View>
          <NavigateButton
            text="Mis datos"
            onPress={() => navigation.navigate("MyData")}
          />
          <NavigateButton
            text="Mis compras"
            onPress={() => console.log("Mis compras")}
          />
          <NavigateButton
            text="Privacidad y seguridad"
            onPress={() => console.log("Privacidad y seguridad")}
          />
          <NavigateButton
            text="Cerrar sesión"
            onPress={() => console.log("Cerrar sesión")}
            cancel
          />
        </View>
      </View>
    </>
  );
};
