import React, { useState } from "react";
import { action, observable } from "mobx";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { SkButton } from "../../components/skButton/SkButton";
import { SkCodeInput } from "../../components/skCodeInput/SkCodeInput";
import { useStores } from "../../hooks/useStores";
import { Routes } from "../../navigation/routes";

const CODE_LENGTH = 6;

const CodeVerification = () => {
  const { user } = useStores();
  const navigation = useNavigation();

  const [local] = useState(() =>
    observable({
      verificationCode: "",
    }),
  );

  const setVerificationCode = action((text: string) => {
    local.verificationCode = text;
  });

  const submitCodeVerification = async () => {
    const response = await user.confirmSignUp(local.verificationCode);
    if (response) {
      navigation.navigate(Routes.LogIn);
    }
  };

  return (
    <SafeAreaView>
      <SkCodeInput
        value={local.verificationCode}
        onChangeText={setVerificationCode}
        codeLength={CODE_LENGTH}
      />
      <SkButton text="Submit" onPress={submitCodeVerification}></SkButton>
    </SafeAreaView>
  );
};

export { CodeVerification };
