import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

function SubscriptionDetail() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Subscription Detail {id}</Text>
      <Link href={"/"}>Go back</Link>
    </View>
  );
}

export default SubscriptionDetail;
