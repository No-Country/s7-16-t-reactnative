import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding1Screen } from "../screens/Onboarding/Onboarding1Screen";
import { Onboarding2Screen } from "../screens/Onboarding/Onboarding2Screen";
import { Onboarding3Screen } from "../screens/Onboarding/Onboarding3Screen";
import { Onboarding4Screen } from "../screens/Onboarding/Onboarding4Screen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { MainLogin } from "../screens/Login/MainLogin";
import { Login } from "../screens/Login/Login";
import { Register1 } from "../screens/Login/Register1";
import { Register2 } from "../screens/Login/Register2";
import MyData from "../screens/Home/MyData";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="MainLogin"
          component={MainLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register1"
          component={Register1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register2"
          component={Register2}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Onboarding1Name" component={Onboarding1Screen} />
        <Stack.Screen name="Onboarding2Name" component={Onboarding2Screen} />
        <Stack.Screen name="Onboarding3Name" component={Onboarding3Screen} />
        <Stack.Screen name="Onboarding4Name" component={Onboarding4Screen} />
        <Stack.Screen name="MyData" component={MyData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
