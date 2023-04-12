import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { StackRoutes } from "./src/navigation/StackRoutes";
import Example from "./src/Example";
import MyData from "./src/screens/Home/MyData";
import CardProduct from "./src/components/CardProduct";
import { AppButton } from "./src/components/AppButton";

export default function App() {
  // return <StackRoutes />;
  return (
    <View className="flex flex-col justify-center h-full w-full">
      <CardProduct />
    </View>
  );
}
