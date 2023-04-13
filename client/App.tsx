import { StackRoutes } from "./src/navigation/StackRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { PerfilScreen } from "./src/screens/Home/PerfilScreen";
import { ScanScreen } from "./src/screens/ScanScreen";
export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
