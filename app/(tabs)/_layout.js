import { Tabs } from "expo-router";
import { tabs } from "../../consts/data";
import { Image, View } from "react-native";
import clsx from "clsx";

const TabLayout = () => {
  const TabIcon = ({ focused, icon }) => {
    return (
      <View className={"size-12 items-center justify-center"}>
        <View
          className={clsx(
            "size-12 items-center justify-center rounded-full bg-transparent",
            focused && "bg-red-400",
          )}
        >
          <Image source={icon} className={"size-6"} />
        </View>
      </View>
    );
  };
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
