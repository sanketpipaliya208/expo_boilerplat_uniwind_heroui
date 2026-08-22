import "../global.css";

import AppProvider from "@/components/providers";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

configureReanimatedLogger({
  strict: false,
  level: ReanimatedLogLevel.warn,
});

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

function AppLayout() {
  return (
    <>
      <StatusBar animated />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}
