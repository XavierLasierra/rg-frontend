import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home works</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("LogIn")}></Button>
    </SafeAreaView>
  );
};

export { Home };
