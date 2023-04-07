import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PerfilScreen } from "../screens/PerfilScreen";
import { ScanScreen } from "../screens/ScanScreen";

export type RootTabParams = {
  PerfilScreen: undefined;
  ScanScreen: undefined;
  HomeScreen: undefined;
};

const Tab = createBottomTabNavigator<RootTabParams>();
export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PerfilScreen" component={PerfilScreen} />
      <Tab.Screen name="ScanScreen" component={ScanScreen} />
    </Tab.Navigator>
  );
};
