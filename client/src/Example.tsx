import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import React from "react";

const Example = () => {
  const [data, setData] = useState(10);

  const num1: number = 20;

  if (num1 === data) {
    console.log("num1 == data");
  }

  return (
    <View className="bg-yellow-500">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "red",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
export default Example;
