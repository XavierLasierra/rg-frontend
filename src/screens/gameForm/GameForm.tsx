import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { observer } from "mobx-react";

import { CgText } from "../../components/cgText/CgText";
import { CgButton } from "../../components/cgButton/CgButton";
import { CgInput } from "../../components/cgInput/CgInput";

import { i18n } from "../../i18n";
import styles from "./GameForm.style";
import { action, observable } from "mobx";

const GameForm = observer(() => {
  const [local] = useState(() =>
    observable({
      game: "",
      players: "",
      description: "",
    }),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <CgText style={styles.title}>{i18n.t("gameForm.title")}</CgText>
        </View>
        <View style={styles.formContainer}>
          <CgInput
            required
            value={local.game}
            onChangeText={action((text: string) => (local.game = text))}
            placeholder={i18n.t("gameForm.form.game")}></CgInput>
          <CgInput
            required
            value={local.players}
            onChangeText={action((text: string) => (local.players = text))}
            placeholder={i18n.t("gameForm.form.players")}></CgInput>
          <CgInput
            required
            value={local.description}
            onChangeText={action((text: string) => (local.description = text))}
            placeholder={i18n.t("gameForm.form.description")}></CgInput>
        </View>
        <View style={styles.bottomContainer}>
          <CgButton
            type="black"
            text={i18n.t("home.button")}
            onPress={() => console.log(local.game)}></CgButton>
        </View>
      </View>
    </SafeAreaView>
  );
});

export { GameForm };
