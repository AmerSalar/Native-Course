import React from "react";
import { Slot, Stack } from "expo-router";

import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
// import "../global.css";

function RootLayout() {
  return (
    <SafeAreaView edges={["top", "left", "right"]} className={"flex-1"}>
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

      <StatusBar className={"bg-blue-100"} />
    </SafeAreaView>
  );
}

export default RootLayout;
