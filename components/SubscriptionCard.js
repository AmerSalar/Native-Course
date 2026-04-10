import { Image, Text, View } from "react-native";
import { formatCurrency } from "../lib/utils";
import { TouchableWithoutFeedback } from "react-native";
import clsx from "clsx";

const SubscriptionCard = ({ name, price, currency, icon, billing, color }) => {
  return (
    <TouchableWithoutFeedback>
      <View
        className={clsx("rounded-2xl border border-border p-4 mb-2", "bg-card")}
        style={color ? { backgroundColor: color } : undefined}
      >
        <View className={"flex-row items-center py-2"}>
          <View className={"min-w-0 flex-1 flex-row items-center gap-3"}>
            <Image source={icon} className={"size-16 rounded-lg"} />
            <View className={"min-w-0 flex-1"}>
              <Text
                numberOfLines={1}
                className={"mb-1 text-md font-sans-bold text-primary"}
              >
                {name}
              </Text>
            </View>
          </View>
          <View className={"ml-3 shrink-0 items-end"}>
            <Text className={"mb-1 text-lg font-sans-bold text-primary"}>
              {formatCurrency(price, currency)}
            </Text>
            <Text className={"text-sm font-sans-medium text-muted-foreground"}>
              {billing}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SubscriptionCard;
