import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainLogin } from "../../screens/Login/MainLogin";
import { Login } from "../../screens/Login/Login";
import { Register1 } from "../../screens/Login/Register1";
import { Register2 } from "../../screens/Login/Register2";

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainLogin"
        component={MainLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register1" component={Register1} />
      <Stack.Screen name="Register2" component={Register2} />
    </Stack.Navigator>
  );
};
