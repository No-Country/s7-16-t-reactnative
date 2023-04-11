import { TouchableOpacity, View, Text, Image } from "react-native";

export const Navbar = () => {
  return (
    <View className="relative">
      <View className="bg-secundario flex-row items-center p-4 absolute bottom-0 w-full h-12">
        <TouchableOpacity className="basis-1/3 self-center scale-90">
          <Image
            source={require("../assets/Navbar/home.png")}
            className="self-center"
          />
          <Text className="text-primario self-center">Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity className="basis-1/3 self-center">
          <Image
            source={require("../assets/Navbar/scan.png")}
            className="self-center scale-100"
          />
        </TouchableOpacity>
        <TouchableOpacity className="basis-1/3 self-center scale-90">
          <Image
            source={require("../assets/Navbar/profile.png")}
            className="self-center scale-110"
          />
          <Text className="text-primario self-center">Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
