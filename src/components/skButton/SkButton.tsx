import React from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

import styles from "./SkButton.style";

export type SkButtonTypes =
  | "primary"
  | "transparent"
  | "secondary"
  | "cancel"
  | "secure";

export interface SkButtonProps extends TouchableOpacityProps {
  size?: "small" | "medium" | "large";
  text: string;
  type?: SkButtonTypes;
  textStyle?: TextStyle;
  loading?: boolean;
}

const SkButton = ({
  type,
  text,
  style,
  children,
  size,
  textStyle,
  disabled,
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
      case "secure":
        textButtonStyle = [...textButtonStyle, styles.secureText];
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
      case "secure":
        buttonStyle = [...buttonStyle, styles.secure];
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

  const renderContent = () => {
    return children ? children : <Text style={getTextStyle()}>{text}</Text>;
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={getButtonStyle()}
      disabled={disabled}
      {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
};

export { SkButton };
