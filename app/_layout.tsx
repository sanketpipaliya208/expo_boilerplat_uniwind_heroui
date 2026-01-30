import "../global.css";

import { Stack } from "expo-router";
import { HeroUINativeConfig, HeroUINativeProvider } from "heroui-native";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const unstable_settings = {
  anchor: "(tabs)",
};

const config: HeroUINativeConfig = {
  devInfo: {
    stylingPrinciples: false,
  },
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <HeroUINativeProvider config={config}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar barStyle="default" />
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
