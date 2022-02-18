import React, { useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { CgButton } from "../../components/cgButton/CgButton";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const onPress = () => {
    setLoading(!loading);
  };

  return (
    <SafeAreaView>
      <Text>Home works</Text>
      <CgButton text="Hi" loading={loading} onPress={onPress}></CgButton>
      <Button
        title="Login"
        onPress={() => navigation.navigate("LogIn")}></Button>
    </SafeAreaView>
  );
};

export { Home };
