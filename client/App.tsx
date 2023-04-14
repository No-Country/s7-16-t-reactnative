import { StackRoutes } from "./src/navigation/StackRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { ScanScreen } from "./src/screens/ScanScreen";
import { HomeTabs } from "./src/navigation/HomeTabs";

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
