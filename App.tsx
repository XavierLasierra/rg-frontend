import React from "react";
import StorybookUIRoot from "./.storybook/Storybook";

import Amplify from "aws-amplify";
import { awsconfig } from "./src/config/aws-exports";

import { stores, StoresProvider } from "./src/stores";
import { MainNavigation } from "./src/navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <StoresProvider value={stores}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </StoresProvider>
  );
};

export default process.env.STORYBOOK_ACTIVE === "true" ? StorybookUIRoot : App;
