import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainLogin } from "../../screens/Login/MainLogin";
import { Login } from "../../screens/Login/Login";
import { Register1 } from "../../screens/Login/Register1";
import { Register2 } from "../../screens/Login/Register2";

export type RootStackParams = {
  MainLogin: undefined;
  Login: undefined;
  Register1: undefined;
  Register2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainLogin"
        component={MainLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTransparent: true, headerTitle: "" }}
      />
      <Stack.Screen
        name="Register1"
        component={Register1}
        options={{ headerTransparent: true, headerTitle: "" }}
      />
      <Stack.Screen
        name="Register2"
        component={Register2}
        options={{ headerTransparent: true, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
};
