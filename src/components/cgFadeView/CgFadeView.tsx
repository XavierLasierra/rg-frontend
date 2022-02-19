import React, { useEffect } from "react";
import { ViewProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Animations } from "../../theme";

interface CgFadeViewProps extends ViewProps {
  opacity?: number;
  animationDuration?: number;
}

const CgFadeView = ({
  children,
  opacity = 1,
  animationDuration = Animations.duration.default,
  style,
  ...rest
}: CgFadeViewProps) => {
  const activeOpacity = useSharedValue(opacity);

  useEffect(() => {
    activeOpacity.value = opacity;
  }, [opacity]);

  const animatedOpacity = useAnimatedStyle(
    () => ({
      opacity: withTiming(activeOpacity.value, {
        duration: animationDuration,
      }),
    }),
    [activeOpacity.value],
  );

  return (
    <Animated.View style={[style, animatedOpacity]} {...rest}>
      {children}
    </Animated.View>
  );
};

export { CgFadeView };
