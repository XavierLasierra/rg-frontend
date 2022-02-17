import { useNavigation } from "@react-navigation/native";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import { CgButton } from "../../components/cgButton/CgButton";
import { SkInput } from "../../components/skInput/SkInput";
import { useStores } from "../../hooks/useStores";
import { Routes } from "../../navigation/routes";
import { SignInResponses } from "../../stores/user/UserStore";

import styles from "./Login.styles";

const LogIn = observer(() => {
  const navigation = useNavigation();
  const { user } = useStores();

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
  return (
    <SafeAreaView>
      <Text style={styles.title}>Login</Text>
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
      <CgButton text="Submit" onPress={submitSignIn}></CgButton>
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
      <CgButton text="Sign Up" onPress={submitSignUp}></CgButton>
    </SafeAreaView>
  );
});

export { LogIn };
