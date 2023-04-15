import { Text, View, Image, TouchableOpacity } from "react-native";

export const HomeScreen = () => {
  return (
    <View className="bg-white w-full h-full">
      <Image
        source={require("../../assets/logo.png")}
        className="w-[129] h-[61] mt-10 self-center"
      />
      <View className="relative">
        <TouchableOpacity>
          <Image
            source={require("../../assets/qr.png")}
            className="absolute self-center top-52"
          />
        </TouchableOpacity>
        <TouchableOpacity className="self-center top-48">
          <Image source={require("../../assets/qr-background.png")} />
        </TouchableOpacity>
        <Text className="m-20 top-32 text-center">
          Apretá el botón para escanear el QR de la tienda y empezar a comprar
        </Text>
      </View>
    </View>
  );
};
