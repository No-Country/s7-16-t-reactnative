import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyData from "../screens/Home/MyData";
import { HomeTabs } from "./HomeTabs";
import { useStack } from "../hooks/useStack";
import { QrScreen } from "../screens/Scanners/QrScreen";

export type RootStackParams = {
  HomeTabs: undefined;
  MyData: undefined;
  QrScreen: undefinned;
};

const Stack = createNativeStackNavigator<RootStackParams>();

// Aca van todas las view que deriban de las principales del tabBar

export const StackNavigation = () => {
  const { headerTitleConBack } = useStack();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyData"
        component={MyData}
        options={{
          headerTransparent: true,
          headerTitle: headerTitleConBack,
        }}
      />
      <Stack.Screen
        name="QrScreen"
        component={QrScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
