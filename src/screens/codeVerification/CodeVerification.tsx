import React from "react";
import { SafeAreaView } from "react-native";
import { SkButton } from "../../components/skButton/SkButton";
import { SkInput } from "../../components/skInput/SkInput";

const CodeVerification = () => {
  return (
    <SafeAreaView>
      <SkInput></SkInput>
      <SkButton text="Verify"></SkButton>
    </SafeAreaView>
  );
};

export { CodeVerification };
