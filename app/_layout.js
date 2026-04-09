import { SplashScreen, Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

function RootLayout() {
  const [fontsLoaded] = useFonts({
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return (
    <SafeAreaView edges={["top", "left", "right"]} className={"flex-1"}>
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

      <StatusBar className={`bg-card`} />
    </SafeAreaView>
  );
}

export default RootLayout;
