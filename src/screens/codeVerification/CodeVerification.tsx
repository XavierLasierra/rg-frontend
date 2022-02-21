import React, { useEffect, useState } from "react";
import { action, observable } from "mobx";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from "react-native";

import { CgCodeInput } from "../../components/cgCodeInput/CgCodeInput";
import { useStores } from "../../hooks/useStores";
import { Routes } from "../../navigation/routes";
import { observer } from "mobx-react";
import { CodeVerificationNavigationProp } from "../../models/navigation";

import styles from "./CodeVerification.style";
import { CgText } from "../../components/cgText/CgText";
import { CgSpinner } from "../../components/cgSpinner/CgSpinner";
import { CgButton } from "../../components/cgButton/CgButton";

const CODE_LENGTH = 6;

export enum CodeStatus {
  Pending = "pending",
  Invalid = "invalid",
  Valid = "valid",
}

const CodeVerification = observer(() => {
  const { user } = useStores();
  const navigation = useNavigation<CodeVerificationNavigationProp>();

  const [local] = useState(() =>
    observable({
      verificationCode: "",
      codeStatus: CodeStatus.Pending as CodeStatus,

      get completeCode() {
        return this.verificationCode.length === CODE_LENGTH;
      },
    }),
  );

  useEffect(() => {
    if (local.completeCode) {
      submitCodeVerification();
    }
  }, [local.completeCode]);

  const setVerificationCode = action((text: string) => {
    local.verificationCode = text;

    if (local.codeStatus === CodeStatus.Invalid) {
      setCodeStatus(CodeStatus.Pending);
    }
  });

  const setCodeStatus = action((status: CodeStatus) => {
    local.codeStatus = status;
  });

  const navigateLogin = () => {
    navigation.navigate(Routes.LogIn);
  };

  const submitCodeVerification = async () => {
    const response = await user.confirmSignUp(local.verificationCode);
    if (response) {
      return setCodeStatus(CodeStatus.Valid);
    }
    return setCodeStatus(CodeStatus.Invalid);
  };

  const resendVerificationCode = async () => {
    const response = await user.resendConfirmationCode();
    if (response) {
      return Alert.alert("Code resent");
    }
    return Alert.alert("Could not resend code");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CgSpinner modal visible={user.loading} />
      <KeyboardAvoidingView
        style={[styles.lightScreen, styles.container]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View>
          <CgText
            style={styles.title}
            parse={[{ type: "email", style: styles.email }]}>
            {`We sent you a verification code to ${user.email}`}
          </CgText>
          <CgCodeInput
            style={styles.codeInput}
            value={local.verificationCode}
            onChangeText={setVerificationCode}
            codeLength={CODE_LENGTH}
            disabled={user.loading || local.codeStatus === CodeStatus.Valid}
            isInvalid={local.codeStatus === CodeStatus.Invalid}
          />
          {local.codeStatus === CodeStatus.Invalid && (
            <CgText>
              {"Please check if the code/email you entered is correct"}
            </CgText>
          )}
          {local.codeStatus === CodeStatus.Valid && (
            <CgText>{"Confirmed"}</CgText>
          )}
        </View>
        {local.codeStatus === CodeStatus.Valid ? (
          <CgButton text="Continue" onPress={navigateLogin} />
        ) : (
          <CgButton
            type="transparent"
            text="Request another code"
            onPress={resendVerificationCode}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

export { CodeVerification };
