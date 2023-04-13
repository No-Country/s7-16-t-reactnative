import { Text, View, ScrollView, Image } from "react-native";

export const HomeScreen = () => {
  return (
    <View className="self-center">
      <Image
        source={require("../../assets/logo.png")}
        className="w-[129] h-[61] mt-10"
      />
    </View>
  );
};
