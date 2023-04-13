import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PerfilScreen } from "../screens/Home/PerfilScreen";
import { ScanScreen } from "../screens/ScanScreen";
import { HomeScreen } from "../screens/Home/Inicio";
import { Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
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
        name="Inicio"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/Navbar/home.png")} />
          ),
        }}
      />
      <Tab.Screen
        name=" "
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
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/Navbar/profile.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
