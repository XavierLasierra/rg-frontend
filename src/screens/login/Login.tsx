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

const LogIn = observer(() => {
  const navigation = useNavigation();
  const { user } = useStores();

  const [isActive, setIsActive] = useState(false);

  const [local] = useState(() =>
    observable({
      email: "",
      password: "",
    }),
  );

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

  const navigateCodeVerification = () => {
    navigation.navigate(Routes.CodeVerification);
  };

  const handleExpandable = () => {
    setIsActive(true);
  };

  const renderSignIn = () => {
    if (isActive) {
      return (
        <>
          <View>
            <SkInput
              onChangeText={action((text: string) => (local.email = text))}
              value={local.email}
              placeholder={"Email address"}></SkInput>
          </View>
          <View>
            <SkInput
              onChangeText={action((text: string) => (local.password = text))}
              value={local.password}
              placeholder={"Password"}></SkInput>
          </View>
          <CgButton text="Submit" onPress={submitSignIn}></CgButton>
          <Text>Forgot your password?</Text>
          <Text>Don't have an account yet?</Text>
          <CgButton type="transparent" text="Sign Up"></CgButton>
        </>
      );
    } else if (!isActive) {
      return (
        <CgButton
          text={"Login To Your Account"}
          type="transparent"
          onPress={handleExpandable}
          textStyle={styles.titleBottom}></CgButton>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.blueFigure} />
          <Text style={styles.titleTop}>Hello!</Text>
          <FastImage
            style={styles.image}
            source={Images.boardGames}></FastImage>
          <CgExpandableView
            activeSize={isActive ? 1 : 0}
            sizePositions={[{ height: "auto" }, { height: 0 }]}>
            <CgFadeView enableOpacity={0} disableOpacity={1} isOpen={isActive}>
              <Text style={styles.text}>
                Welcome to the world of Ranking Games! Start to register your
                plays and see who is the best player!
              </Text>
            </CgFadeView>
          </CgExpandableView>
        </View>
        <CgExpandableView
          style={styles.expandableContainer}
          activeSize={isActive ? 1 : 0}
          sizePositions={[
            { height: Metrics.screenHeight * 0.2 },
            { height: Metrics.screenHeight * 0.5 },
          ]}>
          {renderSignIn()}
        </CgExpandableView>
      </View>
      {/* <View>

        <Text style={styles.title}>Sign Up</Text>
        <View>
          <Text>Email</Text>
          <SkInput
            required
            onChangeText={action((text: string) => (local.email = text))}
            value={local.email}></SkInput>
        </View>
        <View>
          <Text>Password</Text>
          <SkInput
            required
            onChangeText={action((text: string) => (local.password = text))}
            value={local.password}></SkInput>
        </View>
        <SkButton text="Sign Up" onPress={submitSignUp}></SkButton>
      </View> */}
    </SafeAreaView>
  );
});

export { LogIn };
