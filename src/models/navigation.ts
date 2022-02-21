import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "../navigation/routes";

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.LogIn]: undefined;
  [Routes.CodeVerification]: undefined;
};

export type HomeRouteProp = RouteProp<RootStackParamList, Routes.Home>;

export type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.Home
>;

export type LogInRouteProp = RouteProp<RootStackParamList, Routes.LogIn>;

export type LogInNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.LogIn
>;

export type CodeVerificationRouteProp = RouteProp<
  RootStackParamList,
  Routes.CodeVerification
>;

export type CodeVerificationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Routes.CodeVerification
>;
