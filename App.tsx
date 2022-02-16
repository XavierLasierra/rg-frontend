import React from "react";

import Amplify from "aws-amplify";
import { awsconfig } from "./src/config/aws-exports";
import { SafeAreaView } from "react-native";

import { stores, StoresProvider } from "./src/stores";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <StoresProvider value={stores}>
      <SafeAreaView></SafeAreaView>
    </StoresProvider>
  );
};

export default App;
