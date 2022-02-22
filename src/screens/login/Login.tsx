import React, { useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import FastImage from "react-native-fast-image";

import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigation/routes";
import { LogInNavigationProp } from "../../models/navigation";

import { action, observable } from "mobx";
import { observer } from "mobx-react";
import { useStores } from "../../hooks/useStores";

import { SignInResponses } from "../../stores/user/UserStore";

import { CgButton } from "../../components/cgButton/CgButton";
import { SkInput } from "../../components/skInput/SkInput";
import { CgExpandableView } from "../../components/cgExpandableView/CgExpandableView";
import { CgFadeView } from "../../components/cgFadeView/CgFadeView";
import { CgText } from "../../components/cgText/CgText";

import { Images, Metrics } from "../../theme";
import { i18n } from "../../i18n";
import styles from "./Login.styles";

const LogIn = observer(() => {
  const navigation = useNavigation<LogInNavigationProp>();
  const { user } = useStores();

  const [local] = useState(() =>
    observable({
      email: "",
      password: "",
      isOpen: false,
      isSignIn: true,
    }),
  );

  const setEmail = action((email: string) => {
    local.email = email;
  });

  const setPassword = action((password: string) => {
    local.password = password;
  });

  const setIsOpen = action((isOpen: boolean) => {
    local.isOpen = isOpen;
  });

  const setIsSignIn = action((isSignIn: boolean) => {
    local.isSignIn = isSignIn;
    setEmail("");
    setPassword("");
  });

  const navigateCodeVerification = () => {
    navigation.navigate(Routes.CodeVerification);
  };

  const submitSignUp = async () => {
    const response = await user.signUp(local.email, local.password);
    if (response) {
      navigateCodeVerification();
    }
  };

  const submitSignIn = async () => {
    const response = await user.signIn(local.email, local.password);
    if (response === SignInResponses.NotConfirmed) {
      navigateCodeVerification();
    } else if (response === SignInResponses.Ok) {
      Alert.alert("OKKKKK");
    } else {
      Alert.alert("error");
    }
  };

  const renderForm = () => {
    return (
      <>
        <SkInput
          icon="mail"
          onChangeText={setEmail}
          value={local.email}
          placeholder={i18n.t("login.form.emailPlaceholder")}
        />
        <SkInput
          icon="lock"
          onChangeText={setPassword}
          value={local.password}
          placeholder={i18n.t("login.form.passwordPlaceholder")}
        />
        <View style={styles.submitButton}>
          {local.isSignIn ? (
            <CgButton text={i18n.t("login.submit")} onPress={submitSignIn} />
          ) : (
            <CgButton text={i18n.t("login.submit")} onPress={submitSignUp} />
          )}
        </View>
      </>
    );
  };

  const renderUrl = (_: string, match: string[]) => {
    return match[2];
  };

  const renderFooter = () => {
    return local.isSignIn ? (
      <View style={styles.bottomContainer}>
        <CgButton type="transparent" text={i18n.t("login.forgotPassword")} />
        <CgText>{i18n.t("login.signUpText")}</CgText>
        <CgButton
          style={styles.SignUpButton}
          type="transparent"
          text={i18n.t("login.signUpButton")}
          onPress={() => setIsSignIn(false)}
        />
      </View>
    ) : (
      <>
        <View style={styles.bottomContainer}>
          <CgText
            parse={[
              {
                pattern: /(_#)(.+)(#_)/g,
                style: styles.url,
                renderText: renderUrl,
                //onPress: () => console.log("This are the terms and conditions"),
              },
            ]}>
            {i18n.t("login.termsAndConditions")}
          </CgText>
          <CgButton
            style={styles.SignUpButton}
            type="transparent"
            text={i18n.t("login.back")}
            onPress={() => setIsSignIn(true)}
          />
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleTop}>{i18n.t("login.hello")}</Text>
          <View style={styles.imageContainer}>
            <CgExpandableView
              width={
                local.isOpen ? Metrics.screenWidth : Metrics.screenWidth * 0.8
              }
              height={
                local.isOpen ? Metrics.screenHeight : Metrics.screenHeight * 0.4
              }
              style={styles.blueFigure}
            />
            <FastImage style={styles.image} source={Images.boardGames} />
          </View>
          <CgExpandableView height={local.isOpen ? 0 : "auto"}>
            <CgFadeView opacity={local.isOpen ? 0 : 1}>
              <Text style={styles.text}>{i18n.t("login.welcomeText")}</Text>
            </CgFadeView>
          </CgExpandableView>
        </View>
        <CgExpandableView
          style={styles.expandableContainer}
          height={
            local.isOpen
              ? Metrics.screenHeight * 0.5
              : Metrics.screenHeight * 0.2
          }>
          {local.isOpen ? (
            <>
              {renderForm()}
              {renderFooter()}
            </>
          ) : (
            <CgButton
              text={i18n.t("login.loginButton")}
              type="transparent"
              onPress={() => setIsOpen(true)}
              textStyle={styles.titleBottom}
            />
          )}
        </CgExpandableView>
      </View>
    </SafeAreaView>
  );
});

export { LogIn };
