import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function signup() {
  return (
    <View>
      <Text>Sign-up</Text>
      <Link href={"/(auth)/sign-in"}>Already have an account?</Link>
    </View>
  );
}

export default signup;
