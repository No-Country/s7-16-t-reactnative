import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { StackRoutes } from "./src/navigation/StackRoutes";
import Example from "./src/Example";
import MyData from "./src/screens/Home/MyData";

export default function App() {
  return <StackRoutes />;
}
