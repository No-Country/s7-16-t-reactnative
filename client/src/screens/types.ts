import { WebBrowserResult } from "expo-web-browser";

export type RootStackParamList = {
  Onboarding1Name: undefined;
  Onboarding2Name: undefined;
  Onboarding3Name: undefined;
  Onboarding4Name: undefined;
  Login: undefined;
  MainLogin: undefined;
  Home: undefined;
  Register1: undefined;
  Register2: undefined;
};
declare module "expo-web-browser" {
  export interface WebBrowserResultWithUrl extends WebBrowserResult {
    url?: string;
  }

  // Resto del código de la definición de módulo
}
