import { observer } from "mobx-react-lite";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { CgButton } from "../../components/cgButton/CgButton";
import { CgText } from "../../components/cgText/CgText";
import { i18n } from "../../i18n";

import styles from "./Home.styles";

const Home = observer(({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <CgText style={styles.title}>{i18n.t("home.title")}</CgText>
          <CgText style={styles.text}>
            {"YOU DIDN’T JOIN ANY GAME YET... _*CREATE*_ YOUR FIRST PLAY NOW!"}
          </CgText>
        </View>
        <View style={styles.bottomContainer}>
          <CgButton
            type="black"
            text={i18n.t("home.button")}
            onPress={() => navigation.navigate("GameForm")}></CgButton>
        </View>
      </View>
    </SafeAreaView>
  );
});

export { Home };
