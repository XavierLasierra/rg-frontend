import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "../navigation/routes";

export type RootStackParamList = {
  [Routes.Home]: undefined;
};

export type HomeRouteProp = RouteProp<RootStackParamList, Routes.Home>;

export type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.Home
>;
