import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Link href="/explore">
        <Text>Home</Text>
      </Link>
    </View>
  );
};

export default HomeScreen;
