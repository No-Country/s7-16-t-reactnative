import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Example from "./src/Example";

import { StackRoutes } from './src/navigation/StackRoutes'

export default function App() {
  const [data, setData] = useState(10);

  const num1: number = 20;

  if (num1 === data) {
    console.log("num1 == data");
  }

  return (
    <View style={styles.container}>
      <Example />
      <StackRoutes />
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "blue",   
  },
});
