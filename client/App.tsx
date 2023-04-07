import { StatusBar } from "react-native";
import { MainNavigation } from "./src/navigation/StackRoutes";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <MainNavigation />
    </>
  );
}
