import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding1Screen } from "../../screens/Onboarding/Onboarding1Screen";
import { Onboarding2Screen } from "../../screens/Onboarding/Onboarding2Screen";
import { Onboarding3Screen } from "../../screens/Onboarding/Onboarding3Screen";
import { Onboarding4Screen } from "../../screens/Onboarding/Onboarding4Screen";

export type RootStackParams = {
  Onboarding1Screen: undefined;
  Onboarding2Screen: undefined;
  Onboarding3Screen: undefined;
  Onboarding4Screen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding1Screen"
        component={Onboarding1Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding2Screen"
        component={Onboarding2Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding3Screen"
        component={Onboarding3Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding4Screen"
        component={Onboarding4Screen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
