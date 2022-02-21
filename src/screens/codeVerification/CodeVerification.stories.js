import React from "react";
import { storiesOf } from "@storybook/react-native";
import { CodeVerification } from "./CodeVerification";
import { StoresProvider } from "../../stores";
import { NavigationContainer } from "@react-navigation/native";

const storesNotLoading = {
  user: {
    email: "email@email.com",
    loading: false,
  },
};

const storesLoading = {
  user: {
    email: "email@email.com",
    loading: true,
  },
};

storiesOf("CodeVerification", module)
  .addDecorator(getStory => (
    <NavigationContainer>{getStory()}</NavigationContainer>
  ))
  .add("not loading", () => (
    <StoresProvider value={storesNotLoading}>
      <CodeVerification />
    </StoresProvider>
  ))
  .add("loading", () => (
    <StoresProvider value={storesLoading}>
      <CodeVerification />
    </StoresProvider>
  ));
