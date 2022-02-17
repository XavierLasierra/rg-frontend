import React from "react";
import {
  LayoutChangeEvent,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Metrics } from "../../theme";
import { CgSpinner } from "../cgSpinner/CgSpinner";

import styles from "./CgButton.style";

export type SkButtonTypes = "primary" | "transparent" | "secondary" | "cancel";

export interface SkButtonProps extends TouchableOpacityProps {
  size?: "small" | "medium" | "large";
  text: string;
  type?: SkButtonTypes;
  textStyle?: TextStyle;
  loading?: boolean;
}

const CgButton = ({
  type,
  text,
  style,
  children,
  size,
  textStyle,
  disabled,
  loading,
  ...rest
}: SkButtonProps) => {
  const getTextStyle = () => {
    let textButtonStyle: TextStyle[] = [styles.defaultText];

    switch (type) {
      case "secondary":
        textButtonStyle = [...textButtonStyle, styles.secondaryText];
        break;
      case "cancel":
        textButtonStyle = [...textButtonStyle, styles.cancelText];
        break;
      case "transparent":
        textButtonStyle = [...textButtonStyle, styles.transparentText];
        break;
      default:
    }

    switch (size) {
      case "small":
        textButtonStyle = [...textButtonStyle, styles.smallText];
        break;
      case "medium":
        textButtonStyle = [...textButtonStyle, styles.mediumText];
        break;
      default:
    }
    return [...textButtonStyle, textStyle, disabled && styles.disabledText];
  };

  const getButtonStyle = () => {
    let buttonStyle: ViewStyle[] = [styles.default];

    switch (type) {
      case "secondary":
        buttonStyle = [...buttonStyle, styles.secondary];
        break;
      case "cancel":
        buttonStyle = [...buttonStyle, styles.cancel];
        break;
      case "transparent":
        buttonStyle = [...buttonStyle, styles.transparent];
        break;
      default:
    }

    switch (size) {
      case "small":
        buttonStyle = [...buttonStyle, styles.smallButton];
        break;
      case "medium":
        buttonStyle = [...buttonStyle, styles.mediumButton];
        break;
      default:
    }

    return [...buttonStyle, style, disabled && styles.disabled];
  };

  const width = useSharedValue(0);

  const onLayout = (event: LayoutChangeEvent) => {
    width.value = event.nativeEvent.layout.width;
  };

  const renderContent = () => {
    return children ? children : <Text style={getTextStyle()}>{text}</Text>;
  };

  const animatedContainerStyle = useAnimatedStyle(() => ({
    width: withTiming(loading ? Metrics.buttonSize : width.value, {
      duration: 200,
    }),
  }));

  return (
    <TouchableOpacity
      onLayout={onLayout}
      accessibilityRole="button"
      disabled={disabled}
      style={styles.container}
      {...rest}>
      <Animated.View style={[getButtonStyle(), animatedContainerStyle]}>
        {loading ? <CgSpinner style={styles.spinner} /> : renderContent()}
      </Animated.View>
    </TouchableOpacity>
  );
};

export { CgButton };
