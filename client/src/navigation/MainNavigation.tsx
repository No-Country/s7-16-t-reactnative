import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { OnboardingStack } from "./stacks/OnboardingStack";
import { LoginStack } from "./stacks/LoginStack";
import { StackNavigation } from "./StackNavigation";

export type RootStackParams = {
  OnboardingStack: undefined;
  LoginStack: undefined;
  StackNavigation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OnboardingStack"
      >
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
