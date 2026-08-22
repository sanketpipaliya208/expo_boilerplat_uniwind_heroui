import type { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { withUniwind } from "uniwind";

export const SIonicons = withUniwind(Ionicons);
export const SMaterialCommunityIcons = withUniwind(MaterialCommunityIcons);

export type IoniconsName = ComponentProps<typeof Ionicons>["name"];
export type MaterialCommunityIconsName = ComponentProps<typeof MaterialCommunityIcons>["name"];

