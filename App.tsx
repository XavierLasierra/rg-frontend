import React from "react";
import StorybookUIRoot from "./.storybook";
import { NavigationContainer } from "@react-navigation/native";
import Amplify from "aws-amplify";

import { MainNavigation } from "./src/navigation/MainNavigation";

import { awsconfig } from "./src/config/aws-exports";
import { stores, StoresProvider } from "./src/stores";

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

export default process.env.STORYBOOK_ACTIVE === "false" ? StorybookUIRoot : App;
