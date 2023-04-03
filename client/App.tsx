import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Example from "./src/Example";

export default function App() {
  const [data, setData] = useState(10);

  const num1: number = 20;

  if (num1 === data) {
    console.log("num1 == data");
  }

  return (
    <View className="flex-1 items-center justify-center bg-orange-600">
      <Example />
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
