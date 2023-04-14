import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { ScanScreen } from "../screens/ScanScreen";
import { PerfilScreen } from "../screens/Home/PerfilScreen";
import { HomeScreen } from "../screens/Home/HomeScreen";

export type RootTabParams = {
  PerfilScreen: undefined;
  ScanScreen: undefined;
  HomeScreen: undefined;
};

const Tab = createBottomTabNavigator<RootTabParams>();
export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgray",
        tabBarActiveBackgroundColor: "rgba(2, 48, 71, 1)",
        tabBarInactiveBackgroundColor: "rgba(2, 48, 71, 1)",
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Roboto",
          lineHeight: 16,
          fontWeight: "400",
          marginBottom: 5,
        },
        tabBarStyle: {
          height: 60,
        },
        tabBarIconStyle: {
          marginBottom: -6,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/Navbar/home.png")} />
          ),
          title: "Inicio",
        }}
      />
      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          tabBarAccessibilityLabel: "Scan",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/Navbar/scan.png")}
              className="scale-100 top-2"
            />
          ),
          title: "",
        }}
      />
      <Tab.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/Navbar/profile.png")} />
          ),
          title: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
};
