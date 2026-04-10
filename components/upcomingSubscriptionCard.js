import { View, Text, Image } from "react-native";
import { formatCurrency } from "../lib/utils";

const UpcomingSubscriptionCard = ({ name, price, daysLeft, icon }) => {
  return (
    <View
      className={
        "mr-2 w-43 rounded-2xl border border-black/30 bg-background p-4"
      }
    >
      <View className={"flex-row items-center gap-2"}>
        <Image source={icon} className={"size-14"} />
        <View>
          <Text className={"text-lg font-sans-bold text-primary"}>
            {formatCurrency(price)}
          </Text>
          <Text
            className={"text-sm font-sans-semibold text-muted-foreground"}
            numberOfLines={1}
          >
            {daysLeft > 1 ? daysLeft + " Days left" : "Last day"}
          </Text>
        </View>
      </View>
      <Text className={"mt-2 text-lg font-sans-bold text-primary"}>{name}</Text>
    </View>
  );
};

export default UpcomingSubscriptionCard;
