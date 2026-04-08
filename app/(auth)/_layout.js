import React from "react";
import { Slot, Stack } from "expo-router";

import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

export default _layout;
