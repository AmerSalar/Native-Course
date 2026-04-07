import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  Dimensions,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import {} from "react-native-web";

export default function App() {
  return (
    <SafeAreaView
      edges={["top", "left", "right", "bottom"]}
      className={"flex-1 items-center"}
    >
      <ImageBackground
        source={{
          width: 400,
          height: 700,
          uri: "https://picsum.photos/400/700",
        }}
        className={"flex-1 justify-end items-center"}
      >
        <View className={"bottom-[320]"}>
          <View
            className={" bg-red-400 border-4 border-blue-400 rounded-full p-10"}
          >
            <Image source={require("./assets/favicon.png")} />
          </View>
          <Text className={"text-white "}>Welcome to our app</Text>
        </View>

        <View className={"bg-red-400 w-screen h-[60]"} />
        <View className={"bg-blue-400 w-screen h-[60]"} />
      </ImageBackground>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
