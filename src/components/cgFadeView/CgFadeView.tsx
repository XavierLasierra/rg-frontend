import React, { ReactChild } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface CgFadeViewProps {
  children: ReactChild;
  isOpen: boolean;
  enableOpacity: number;
  disableOpacity: number;
  style?: StyleProp<ViewStyle>;
}

const CgFadeView = ({
  children,
  isOpen,
  enableOpacity,
  disableOpacity,
  style,
}: CgFadeViewProps) => {
  const opacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isOpen ? enableOpacity : disableOpacity),
    };
  });

  return <Animated.View style={[style, opacity]}>{children}</Animated.View>;
};

export { CgFadeView };
