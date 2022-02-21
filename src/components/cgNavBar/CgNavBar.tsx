import React from "react";

import { View, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";

import styles from "./CgNavBar.style";
import { useNavigation } from "@react-navigation/native";
import { CgText } from "../cgText/CgText";

export interface CgNavBarProps {
  title?: string;
  titleComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  rightActions?: React.ReactNode[];
  transparent?: boolean;
  back?: boolean;
  modal?: boolean;
}

const CgNavBar = observer((props: CgNavBarProps) => {
  const {
    title,
    leftComponent,
    titleComponent,
    rightActions,
    transparent,
    back,
    modal,
  } = props;
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const renderBack = () => {
    return transparent ? (
      <TouchableOpacity>
        <CgText>back</CgText>
      </TouchableOpacity>
    ) : (
      // <SkRoundIcon
      //   testID="back-button-transparent"
      //   name="back"
      //   onPress={goBack}
      //   iconStyle={styles.backIcon}
      //   style={styles.roundedIcon}
      // />
      <TouchableOpacity
        testID="back-button"
        style={styles.barButton}
        onPress={goBack}>
        <TouchableOpacity>
          <CgText>back</CgText>
        </TouchableOpacity>
        {/* <SkIcon name="back" style={styles.backIcon} /> */}
      </TouchableOpacity>
    );
  };

  const renderLeft = () => {
    if (back || leftComponent) {
      return (
        <>
          {back && renderBack()}
          {leftComponent}
        </>
      );
    }
  };

  const renderRight = () => {
    if (modal || rightActions) {
      return (
        <>
          {rightActions}
          {modal && (
            <TouchableOpacity
              testID="close-button"
              style={styles.barButton}
              onPress={goBack}>
              <TouchableOpacity>
                <CgText>back</CgText>
              </TouchableOpacity>
              {/* <SkIcon name="circle-close" style={styles.backIcon} /> */}
            </TouchableOpacity>
          )}
        </>
      );
    }
  };

  const renderTitle = () => {
    if (titleComponent) {
      return titleComponent;
    }
    return (
      <CgText style={[styles.title, !back && styles.centered]}>
        {title || ""}
      </CgText>
    );
  };

  return (
    <View
      style={[
        styles.navBar,
        !modal && !transparent && styles.shadow,
        transparent ? styles.transparent : null,
      ]}>
      <View style={styles.leftContainer}>{renderLeft()}</View>
      <View style={styles.titleWrapper}>{renderTitle()}</View>
      <View style={styles.rightContainer}>{renderRight()}</View>
    </View>
  );
});

export { CgNavBar };
