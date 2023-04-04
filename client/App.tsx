import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { StackRoutes } from "./src/navigation/StackRoutes";
import Example from "./src/Example";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Example />
      <StatusBar style="auto" />
    </View>
  );
}
