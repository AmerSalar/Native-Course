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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

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
        window width: {Dimensions.get("window").width}, window height:{" "}
        {Dimensions.get("window").height}
      </Text>
      <Text>
        Width: {useWindowDimensions().width}, {useDeviceOrientation()}
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
      <View className={"flex-row gap-3 mt-2"}>
        <Button
          title="Button"
          onPress={() => {
            Alert.alert("Feedback", "Button Tapped", [
              {
                text: "چیبووە؟",
                onPress: () => {
                  Alert.alert("نازانم :)");
                },
              },
              { text: "بەردەوامبوون" },
            ]);
          }}
          className={"hidden"}
        />
        <View className={Platform.OS != "ios" ? "hidden" : "visible"}>
          {/* prompt is IOS only, check with Platform API*/}
          <Button
            title="TextMe"
            onPress={() => {
              console.log();
              Alert.prompt("Text", "Write message:", (text) => {
                console.log(text);
              });
            }}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
