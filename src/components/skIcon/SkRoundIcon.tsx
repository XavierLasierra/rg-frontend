import React from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { SkIcon } from "./SkIcon";

import styles from "./SkRoundIcon.style";

export interface SkRoundIconProps extends TouchableOpacityProps {
  name: string;
  size?: "small" | "medium" | "large";
  iconStyle?: StyleProp<TextStyle>;
}

const SkRoundIcon = (props: SkRoundIconProps) => {
  const { name, size, style, iconStyle, onPress, ...rest } = props;

  const getCircleStyle = () => {
    switch (size) {
      case "small":
        return styles.smallCircle;
      case "medium":
        return styles.mediumCircle;
      case "large":
        return styles.largeCircle;
      default:
        return styles.smallCircle;
    }
  };

  const getIconStyle = () => {
    switch (size) {
      case "small":
        return styles.smallIcon;
      case "medium":
        return styles.mediumIcon;
      case "large":
        return styles.largeIcon;
      default:
        return styles.smallIcon;
    }
  };
  return (
    <TouchableOpacity
      disabled={!onPress}
      activeOpacity={onPress ? 0.8 : 1}
      onPress={onPress}
      style={[styles.rounded, getCircleStyle(), style]}
      {...rest}>
      <SkIcon name={name} style={[styles.icon, getIconStyle(), iconStyle]} />
    </TouchableOpacity>
  );
};

export { SkRoundIcon };
