import React, { useState } from "react";
import {
  ColorValue,
  LayoutChangeEvent,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { CgSpinner } from "../cgSpinner/CgSpinner";

import { Animations, Colors, Metrics } from "../../theme";
import styles from "./CgButton.style";

export type SkButtonTypes = "primary" | "transparent" | "secondary" | "cancel";

export interface SkButtonProps extends TouchableOpacityProps {
  size?: "small" | "medium" | "large";
  text: string;
  type?: SkButtonTypes;
  textStyle?: TextStyle;
  loading?: boolean;
  animationDuration?: number;
}

const buttonSizes = {
  small: Metrics.buttonSmallSize,
  medium: Metrics.buttonMediumSize,
  large: Metrics.buttonSize,
};

const CgButton = ({
  type,
  text,
  style,
  children,
  size = "large",
  textStyle,
  disabled,
  loading,
  animationDuration = Animations.duration.short,
  ...rest
}: SkButtonProps) => {
  const [width, setWidth] = useState<number>();

  const onLayout = ({
    nativeEvent: {
      layout: { width },
    },
  }: LayoutChangeEvent) => {
    setWidth(width);
  };

  const animatedContainerStyle = useAnimatedStyle(() =>
    width !== undefined
      ? {
          width: withTiming(loading ? buttonSizes[size] : width, {
            duration: animationDuration,
            easing: Easing.circle,
          }),
        }
      : {},
  );

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

  const getBallColor = () => {
    let ballColor: ColorValue;
    switch (type) {
      case "secondary":
        ballColor = Colors.secondary;
        break;
      case "cancel":
        ballColor = Colors.error;
        break;
      case "transparent":
        ballColor = Colors.secondary;
        break;
      default:
        ballColor = Colors.white;
    }
    return ballColor;
  };

  const renderContent = () => {
    return children ? children : <Text style={getTextStyle()}>{text}</Text>;
  };

  return (
    <TouchableOpacity
      onLayout={onLayout}
      accessibilityRole="button"
      disabled={disabled}
      style={styles.container}
      {...rest}>
      <Animated.View style={[getButtonStyle(), animatedContainerStyle]}>
        {loading ? (
          <CgSpinner ballSize={size} ballColor={getBallColor()} />
        ) : (
          renderContent()
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export { CgButton };
