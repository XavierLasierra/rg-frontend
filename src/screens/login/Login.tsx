import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SkButton } from "../../components/skButton/SkButton";
import { SkInput } from "../../components/skInput/SkInput";

import styles from "./Login.styles";

const LogIn = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate("CodeVerification");
  };
  return (
    <SafeAreaView>
      <Text style={styles.title}>Login</Text>
      <View>
        <Text>Email</Text>
        <SkInput required></SkInput>
      </View>
      <View>
        <Text>Password</Text>
        <SkInput required></SkInput>
      </View>
      <SkButton text="Submit"></SkButton>
      <Text style={styles.title}>Sign Up</Text>
      <View>
        <Text>Email</Text>
        <SkInput required></SkInput>
      </View>
      <View>
        <Text>Password</Text>
        <SkInput required></SkInput>
      </View>
      <SkButton text="Sign Up" onPress={handleSignUp}></SkButton>
    </SafeAreaView>
  );
};

export { LogIn };
