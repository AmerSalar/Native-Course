import { Image } from "react-native";
import { Text, View, ScrollView } from "react-native";
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
export default function App() {
  return (
    <ScrollView
      className={"bg-background p-5 flex-1 "}
      contentContainerStyle={{ paddingBottom: 125 }}
    >
      <View
        className={`mb-2.5 flex-row items-center justify-between p-2 rounded-[25] bg-card`}
      >
        <View className={"flex-row items-center"}>
          <Image source={images.avatar} className={"size-16 rounded-full"} />
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

      <View className={""}>
        <ListHeading title={"Upcoming"} />
        <FlatList
          data={UPCOMING_SUBSCRIPTIONS}
          renderItem={({ item }) => <UpcomingSubscriptionCard {...item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <Text className={"py-4 text-sm font-sans-medium text-black/60"}>
              You don't have upcoming renewals yet.
            </Text>
          }
        />
      </View>

      <View className={""}>
        <ListHeading title={"All Subs"} />
        <FlatList
          data={HOME_SUBSCRIPTIONS}
          renderItem={({ item }) => <SubscriptionCard {...item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          ListEmptyComponent={
            <Text className={"py-4 text-sm font-sans-medium text-black/60"}>
              You don't have any subscriptions.
            </Text>
          }
        />
      </View>
    </ScrollView>
  );
}
