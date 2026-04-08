import {} from "react-native";
// import "../global.css";
import { Text, View } from "react-native";
import Welcome from "../tabs/Welcome";
import { Link } from "expo-router";
import "../../global.css";
export default function App() {
  return (
    <View className={"flex-1 items-center"}>
      <Welcome />
    </View>
  );
}
