import React, { useEffect, useState } from "react";
import {
  ColorValue,
  LayoutChangeEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
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
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  animationDuration?: number;
  containerStyle?: StyleProp<ViewStyle>;
}

const buttonSizes = {
  small: Metrics.buttonSmallSize,
  medium: Metrics.buttonMediumSize,
  large: Metrics.buttonSize,
};

const CgButton = ({
  type = "primary",
  text,
  style,
  containerStyle,
  children,
  size = "large",
  textStyle,
  disabled,
  loading,
  animationDuration = Animations.duration.short,
  ...rest
}: SkButtonProps) => {
  const [width, setWidth] = useState<number>();
  const buttonWidth = useSharedValue<number | null>(null);

  useEffect(() => {
    if (!width) return;
    buttonWidth.value = loading ? buttonSizes[size] : width;
  }, [loading, width]);

  const onLayout = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
    setWidth(layout.width);
  };

  const animatedContainerStyle = useAnimatedStyle(
    () =>
      buttonWidth.value !== null
        ? {
            width: withTiming(buttonWidth.value, {
              duration: animationDuration,
              easing: Easing.circle,
            }),
          }
        : {},
    [buttonWidth.value],
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
      style={[styles.container, containerStyle]}
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
