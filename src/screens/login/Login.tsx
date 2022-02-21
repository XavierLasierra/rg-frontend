import React, { useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigation/routes";

import { action, observable } from "mobx";
import { observer } from "mobx-react";
import { useStores } from "../../hooks/useStores";

import { SignInResponses } from "../../stores/user/UserStore";

import { CgButton } from "../../components/cgButton/CgButton";
import { SkInput } from "../../components/skInput/SkInput";
import { CgExpandableView } from "../../components/cgExpandableView/CgExpandableView";
import { CgFadeView } from "../../components/cgFadeView/CgFadeView";

import { Images, Metrics } from "../../theme";
import styles from "./Login.styles";
import { LogInNavigationProp } from "../../models/navigation";
import { CgText } from "../../components/cgText/CgText";

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
          onChangeText={setEmail}
          value={local.email}
          placeholder={"Email address"}
        />
        <SkInput
          onChangeText={setPassword}
          value={local.password}
          placeholder={"Password"}
        />
        {local.isSignIn ? (
          <CgButton text="Submit" onPress={submitSignIn} />
        ) : (
          <CgButton text="Submit" onPress={submitSignUp} />
        )}
      </>
    );
  };

  const renderFooter = () => {
    return local.isSignIn ? (
      <>
        <CgButton type="transparent" text="Forgot your password?" />
        <CgText>{`Don't have an account yet?`}</CgText>
        <CgButton
          type="transparent"
          text="Sign Up"
          onPress={() => setIsSignIn(false)}
        />
      </>
    ) : (
      <>
        <CgText>{`By signing up you agree to our Terms and Conditions`}</CgText>
        <CgButton
          type="transparent"
          text="Go back"
          onPress={() => setIsSignIn(true)}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titleTop}>Hello!</Text>
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
              <Text style={styles.text}>
                Welcome to the world of Ranking Games! Start to register your
                plays and see who is the best player!
              </Text>
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
            [renderForm(), renderFooter()]
          ) : (
            <CgButton
              text={"Login To Your Account"}
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
