import { Image } from "react-native";
import { Text, View } from "react-native";
import images from "../../consts/images";
import { HOME_BALANCE, HOME_USER } from "../../consts/data";
import { icons } from "../../consts/icons";
import { formatCurrency } from "../../lib/utils";
import dayjs from "dayjs";
import ListHeading from "../../components/listHeadings";
import UpcomingSubscription from "../../components/upcomingSubscriptions";
/**
 * Render the home dashboard view with user header, balance card, and list heading.
 *
 * Displays the user's avatar and name, an add icon button, the formatted account balance,
 * and the next renewal date.
 * @returns {JSX.Element} The component tree for the dashboard view.
 */
export default function App() {
  return (
    <View className={"bg-background p-5 flex-1"}>
      <View className={`mb-2.5 flex-row items-center justify-between `}>
        <View className={"flex-row items-center"}>
          <Image source={images.avatar} className={"size-16 rounded-full"} />
          <Text className={"ml-4 text-2xl font-sans-bold text-primary"}>
            {HOME_USER.name}
          </Text>
        </View>
        <View className={"border border-primary rounded-full"}>
          <Image source={icons.add} className={"size-12"} />
        </View>
      </View>

      <View
        className={
          "my-2.5 min-h-50 justify-between gap-5 rounded-bl-4xl rounded-tr-4xl bg-accent p-6"
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
      <ListHeading></ListHeading>
    </View>
  );
}
