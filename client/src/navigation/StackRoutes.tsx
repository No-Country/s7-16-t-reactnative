import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Onboarding Screens
import { Onboarding1Screen } from "../screens/Onboarding/Onboarding1Screen";
import { Onboarding2Screen } from "../screens/Onboarding/Onboarding2Screen";
import { Onboarding3Screen } from "../screens/Onboarding/Onboarding3Screen";
import { Onboarding4Screen } from "../screens/Onboarding/Onboarding4Screen";
//Login Screens
import { MainLogin } from "../screens/Login/MainLogin";
import { Login } from "../screens/Login/Login";
import { Register1 } from "../screens/Login/Register1";
import { Register2 } from "../screens/Login/Register2";
//Home Screens
import MyData from "../screens/Home/MyData";
import { PerfilScreen } from "../screens/Home/PerfilScreen";
import { ScanScreen } from "../screens/ScanScreen";
//Tab
import { HomeTabs } from "./HomeTabs";
const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding1Name">
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

      <Stack.Screen
        name="Onboarding1Name"
        component={Onboarding1Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding2Name"
        component={Onboarding2Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding3Name"
        component={Onboarding3Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding4Name"
        component={Onboarding4Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyData"
        component={MyData}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={PerfilScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Scan"
        component={ScanScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
