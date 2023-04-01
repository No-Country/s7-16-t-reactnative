import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { StackRoutes } from "./src/navigation/StackRoutes";

export default function App() {

  return (
    <View style={styles.container}>
      {/* <Example /> */}
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
