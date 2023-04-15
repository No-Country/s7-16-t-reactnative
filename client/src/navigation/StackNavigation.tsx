import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyData from "../screens/Home/MyData";
import { HomeTabs } from "./HomeTabs";

export type RootStackParams = {
  HomeTabs: undefined;
  MyData: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

// Aca van todas las view que deriban de las principales del tabBar

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MyData" component={MyData} />
    </Stack.Navigator>
  );
};
