import React from "react";
import { SafeAreaView, View } from "react-native";

import { CgText } from "../../components/cgText/CgText";
import { CgButton } from "../../components/cgButton/CgButton";

import { i18n } from "../../i18n";
import styles from "./GameForm.style";
import { SkInput } from "../../components/skInput/SkInput";

const GameForm = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <CgText style={styles.title}>{i18n.t("gameForm.title")}</CgText>
        </View>
        <View style={styles.formContainer}>
          <SkInput placeholder={i18n.t("gameForm.form.game")}></SkInput>
          <SkInput placeholder={i18n.t("gameForm.form.players")}></SkInput>
          <SkInput placeholder={i18n.t("gameForm.form.description")}></SkInput>
        </View>
        <View style={styles.bottomContainer}>
          <CgButton
            type="black"
            text={i18n.t("home.button")}
            onPress={() => console.log("hi")}></CgButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { GameForm };
