import React from "react";
import { ViewProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { Animations } from "../../theme";

interface CgFadeViewProps extends ViewProps {
  isOpen: boolean;
  enableOpacity: number;
  disableOpacity: number;
  animationDuration?: number;
}

const CgFadeView = ({
  children,
  isOpen,
  enableOpacity,
  disableOpacity,
  animationDuration = Animations.duration.default,
  style,
}: CgFadeViewProps) => {
  const opacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isOpen ? enableOpacity : disableOpacity, {
        duration: animationDuration,
      }),
    };
  });

  return <Animated.View style={[style, opacity]}>{children}</Animated.View>;
};

export { CgFadeView };
