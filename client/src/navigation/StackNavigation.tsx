import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyData from "../screens/Home/MyData";
import { HomeTabs } from "./HomeTabs";
import { useStack } from "../hooks/useStack";
import { QrScreen } from "../screens/Scanners/QrScreen";
import ScreenFinalPayment from "../screens/Payment/ScreenFinalPayment";
import { MisComprasScreen } from "../screens/Home/MisComprasScreen";

export type RootStackParams = {
  HomeTabs: undefined;
  MyData: undefined;
  QrScreen: undefined;
  ScreenFinalPayment: undefined;
  MisComprasScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

// Aca van todas las view que deriban de las principales del tabBar

export const StackNavigation = () => {
  const { headerTitleConBack } = useStack();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
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
        options={{
          headerTransparent: true,
          headerTitle: headerTitleConBack,
        }}
      />
      <Stack.Screen
        name="ScreenFinalPayment"
        component={ScreenFinalPayment}
        options={{
          // headerTransparent: true,
          headerTitle: headerTitleConBack,
        }}
      />

      <Stack.Screen
        name="MisComprasScreen"
        component={MisComprasScreen}
        options={{
          headerTransparent: true,
          headerTitle: headerTitleConBack,
        }}
      />
    </Stack.Navigator>
  );
};
