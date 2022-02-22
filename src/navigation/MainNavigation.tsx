import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import { Routes } from "./routes";
import { RootStackParamList } from "../models/navigation";

import { Home } from "../screens/home/Home";
import { LogIn } from "../screens/login/Login";
import { CodeVerification } from "../screens/codeVerification/CodeVerification";
import { useStores } from "../hooks/useStores";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = observer(() => {
  const { user } = useStores();

  const main = () => {
    return user.isLoggedIn ? (
      <>
        <Stack.Screen name={Routes.Home} component={Home} />
      </>
    ) : (
      <>
        <Stack.Screen name={Routes.LogIn} component={LogIn} />
        <Stack.Screen
          name={Routes.CodeVerification}
          component={CodeVerification}
          options={{ presentation: "modal" }}
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
