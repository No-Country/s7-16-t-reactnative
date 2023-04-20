import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PerfilScreen } from "../screens/Home/PerfilScreen";
import { ScanScreen } from "../screens/ScanScreen";
import { HomeScreen } from "../screens/Home/Inicio";
import { Image } from "react-native";
import { useStack } from "../hooks/useStack";

export type RootTabParams = {
  PerfilScreen: undefined;
  ScanScreen: undefined;
  HomeScreen: undefined;
};

const Tab = createBottomTabNavigator<RootTabParams>();

export const HomeTabs = () => {
  const { headerTitleSinBack } = useStack();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgray",
        tabBarActiveBackgroundColor: "rgba(2, 48, 71, 1)",
        tabBarInactiveBackgroundColor: "rgba(2, 48, 71, 1)",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          tabBarIcon: () => (
            <Image source={require("../assets/Navbar/home.png")} />
          ),
          headerTitle: headerTitleSinBack,
          title: "Inicio",
        }}
      />
      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
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
          headerTransparent: true,
          tabBarIcon: () => (
            <Image source={require("../assets/Navbar/profile.png")} />
          ),
          headerTitle: headerTitleSinBack,
          title: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
};
