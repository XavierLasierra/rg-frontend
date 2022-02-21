import React, { useState } from "react";
import { action, observable } from "mobx";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { CgButton } from "../../components/cgButton/CgButton";
import { SkCodeInput } from "../../components/skCodeInput/SkCodeInput";
import { useStores } from "../../hooks/useStores";
import { Routes } from "../../navigation/routes";
import { observer } from "mobx-react";
import { CodeVerificationNavigationProp } from "../../models/navigation";

const CODE_LENGTH = 6;

const CodeVerification = observer(() => {
  const { user } = useStores();
  const navigation = useNavigation<CodeVerificationNavigationProp>();

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
        style={{ paddingVertical: 20 }}
        value={local.verificationCode}
        onChangeText={setVerificationCode}
        codeLength={CODE_LENGTH}
      />
      <CgButton text="Submit" onPress={submitCodeVerification}></CgButton>
    </SafeAreaView>
  );
});

export { CodeVerification };
