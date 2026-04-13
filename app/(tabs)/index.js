import { Image, Pressable } from "react-native";
import { Text, View } from "react-native";
import images from "../../consts/images";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "../../consts/data";
import { icons } from "../../consts/icons";
import { formatCurrency } from "../../lib/utils";
import dayjs from "dayjs";
import ListHeading from "../../components/listHeadings";
import UpcomingSubscriptionCard from "../../components/upcomingSubscriptionCard";
import { FlatList } from "react-native";
import SubscriptionCard from "../../components/SubscriptionCard";
import { useState } from "react";
export default function App() {
  const [expandedSubscriptionID, setExpandedSubscriptionID] = useState(null);
  return (
    <View className={"flex-1 bg-background p-4"}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View
              className={`mb-2.5 flex-row items-center justify-between p-2 rounded-[25] bg-card`}
            >
              <View className={"flex-row items-center"}>
                <Image
                  source={images.avatar}
                  className={"size-16 rounded-full"}
                />
                <Text className={"ml-4 text-2xl font-sans-bold text-primary"}>
                  {HOME_USER.name}
                </Text>
              </View>
              <View className={"border border-border rounded-full"}>
                <Image source={icons.add} className={"size-12 "} />
              </View>
            </View>

            <View
              className={
                "my-2.5 min-h-50 justify-between gap-5 rounded-3xl bg-pill p-6"
              }
            >
              <Text className={"text-xl font-sans-semibold text-white/80"}>
                Balance
              </Text>
              <View className={"flex-row items-center justify-between"}>
                <Text className={"text-4xl font-sans-extrabold text-white"}>
                  {formatCurrency(HOME_BALANCE.amount)}
                </Text>
                <Text className={"text-xl font-sans-medium text-white"}>
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                </Text>
              </View>
            </View>

            <View className={"mb-5"}>
              <ListHeading title={"Upcoming"} />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => (
                  <UpcomingSubscriptionCard {...item} />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <Text
                    className={"py-4 text-sm font-sans-medium text-black/60"}
                  >
                    You don't have upcoming renewals yet.
                  </Text>
                }
              />
            </View>
            <Pressable onPress={() => console.log(insets.bottom)}>
              <ListHeading title={"All Subs"} />
            </Pressable>
          </>
        )}
        data={HOME_SUBSCRIPTIONS}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionID == item.id}
            onPress={() =>
              setExpandedSubscriptionID((currentID) =>
                currentID == item.id ? null : item.id,
              )
            }
          />
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        extraData={expandedSubscriptionID}
        ListEmptyComponent={
          <Text className={"py-4 text-sm font-sans-medium text-black/60"}>
            You don't have any subscriptions.
          </Text>
        }
        ItemSeparatorComponent={<View className={"h-2"} />}
        contentContainerStyle={{
          paddingBottom: 98,
        }}
      />
    </View>
  );
}
