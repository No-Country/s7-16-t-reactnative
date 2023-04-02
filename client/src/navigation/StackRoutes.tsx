import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding1Screen } from "../screens/Onboarding1Screen";
import { Onboarding2Screen } from "../screens/Onboarding2Screen";
import { Onboarding3Screen } from "../screens/Onboarding3Screen";
import { Onboarding4Screen } from "../screens/Onboarding4Screen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding1Name" component={Onboarding1Screen} />
        <Stack.Screen name="Onboarding2Name" component={Onboarding2Screen} />
        <Stack.Screen name="Onboarding3Name" component={Onboarding3Screen} />
        <Stack.Screen name="Onboarding4Name" component={Onboarding4Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
