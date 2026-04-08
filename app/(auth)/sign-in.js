import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function signin() {
  return (
    <View>
      <Text>Sign-in</Text>
      <Link href={"/(auth)/sign-up"}>Create Account</Link>
    </View>
  );
}

export default signin;
