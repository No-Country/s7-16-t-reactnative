import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Example = () => {
  // const [data, setData] = useState(10);

  // const num1: number = 20;

  // if (num1 === data) {
  //   console.log("num1 == data");
  // }

  return (
    <View style={styles.container}>
      <Text>Aplicacion!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Example;
