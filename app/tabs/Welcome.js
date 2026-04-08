import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import "../../global.css";
function Welcome() {
  return (
    <ImageBackground
      source={{
        width: 400,
        height: 700,
        uri: "https://picsum.photos/400/700",
      }}
      className={"flex-1 "}
    >
      <View className={"flex-1 justify-end items-center bg-blue-200"}>
        <View className={"absolute top-[120] "}>
          <View
            className={
              " bg-blue-100 border-4 border-transparent rounded-full p-10"
            }
          >
            <Image
              source={require("../../assets/favicon.png")}
              className={"scale-[1.5]"}
            />
          </View>
          <Text className={"text-blue-500 "}>Welcome to our app</Text>
        </View>

        <View className={"bg-blue-300 w-screen h-[60]"} />
        <View className={"bg-blue-400 w-screen h-[60] mb-10"} />
      </View>
    </ImageBackground>
  );
}

export default Welcome;
