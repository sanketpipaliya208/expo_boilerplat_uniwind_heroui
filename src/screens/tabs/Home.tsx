import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Link href="/explore">
        <Text className="text-demo">Home</Text>
      </Link>
    </View>
  );
}
