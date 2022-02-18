import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import { Routes } from "./routes";
import { RootStackParamList } from "../models/navigation";

import { Home } from "../screens/home/Home";
import { LogIn } from "../screens/login/Login";
import { CodeVerification } from "../screens/codeVerification/CodeVerification";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = observer(() => {
  const main = () => {
    return (
      <>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.LogIn} component={LogIn} />
        <Stack.Screen
          name={Routes.CodeVerification}
          component={CodeVerification}
        />
      </>
    );
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {main()}
    </Stack.Navigator>
  );
});

export { MainNavigation };
