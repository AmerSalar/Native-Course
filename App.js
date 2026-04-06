import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function App() {
  return (
    <SafeAreaView
      edges={["top", "left", "right", "bottom"]}
      className={"flex-1 bg-white justify-center items-center"}
    >
      <Text
        className={"text-black"}
        onPress={() => {
          console.log("text clicked");
        }}
      >
        Hello World
      </Text>
      <View className={"flex-row gap-1"}>
        <Image
          source={require("./assets/icon.png")}
          className={"w-20 h-20 rounded-full border mt-1"}
        ></Image>
        <Image
          blurRadius={4}
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/200",
          }}
          className={"w-20 h-20 rounded-full border mt-1"}
        ></Image>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("Touched");
        }}
      >
        <Text className={"mt-5 p-2 border rounded-full"}>
          touchable without feedback
        </Text>
      </TouchableWithoutFeedback>
      <TouchableHighlight
        onPress={() => {
          console.log("Highlighted");
        }}
      >
        <Text className={"mt-1 p-2 border rounded-full"}>
          touchable highlight
        </Text>
      </TouchableHighlight>
      <TouchableOpacity
        onPress={() => {
          console.log("Opacity");
        }}
      >
        <Text className={"mt-1 p-2 border rounded-full"}>
          touchable opacity
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
