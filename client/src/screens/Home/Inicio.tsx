import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-white w-full h-full">
      <View className="top-20">
        <TouchableOpacity>
          <Image
            source={require("../../assets/qr.png")}
            className="absolute self-center top-52"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="self-center top-48"
          onPress={() => navigation.navigate("QrScreen" as never)}
        >
          <Image source={require("../../assets/qr-background.png")} />
        </TouchableOpacity>
        <Text className="m-20 top-32 text-center">
          Apretá el botón para escanear el QR de la tienda y empezar a comprar
        </Text>
      </View>
    </View>
  );
};
