import { Tabs } from "expo-router";
import { tabs } from "../../consts/data";
import { Image, View } from "react-native";
import clsx from "clsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { components, colors } from "../../consts/theme";
const tabBar = components.tabBar;
const TabLayout = () => {
  const insets = useSafeAreaInsets();
  const TabIcon = ({ focused, icon }) => {
    return (
      <View className={"size-12 items-center justify-center"}>
        <View
          className={clsx(
            "size-12 items-center justify-center rounded-full bg-[#0000]",
            focused && "bg-[#ea7a53]",
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
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          backgroundColor: colors.primary,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          borderTopWidth: 0,
          elevation: 0,
          height: tabBar.height,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
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
