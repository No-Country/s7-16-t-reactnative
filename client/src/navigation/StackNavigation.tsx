import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyData from "../screens/Home/MyData";
import { TabNavigation } from "./TabNavigation";

export type RootStackParams = {
  TabNavigation: undefined;
  MyData: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MyData" component={MyData} />
    </Stack.Navigator>
  );
};
