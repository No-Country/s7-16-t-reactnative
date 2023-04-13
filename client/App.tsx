import { StackRoutes } from "./src/navigation/StackRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { PerfilScreen } from "./src/screens/Home/PerfilScreen";
import { ScanScreen } from "./src/screens/ScanScreen";
<<<<<<< HEAD
export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
=======
=======
import { StatusBar } from "expo-status-bar";
import { StackRoutes } from "./src/navigation/StackRoutes";
import { ScanScreen } from "./src/screens/ScanScreen";

>>>>>>> be2d70bcd89114b8a17ba885590fac070930b3fe
export default function App() {
  return <ScanScreen />;
>>>>>>> 10908abd12141ac04c1d9259259b6b9953a66194
}
