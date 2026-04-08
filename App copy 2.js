import { StatusBar } from "expo-status-bar";
import {} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";
import Welcome from "./app/tabs/Welcome";

export default function App() {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className={"flex-1 items-center"}
    >
      <Welcome />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
