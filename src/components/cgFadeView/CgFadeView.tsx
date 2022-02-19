import React, { useEffect } from "react";
import { ViewProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Animations } from "../../theme";

interface CgFadeViewProps extends ViewProps {
  isEnabled: boolean;
  enabledOpacity?: number;
  disabledOpacity?: number;
  animationDuration?: number;
}

const CgFadeView = ({
  children,
  isEnabled,
  enabledOpacity = 1,
  disabledOpacity = 0,
  animationDuration = Animations.duration.default,
  style,
  ...rest
}: CgFadeViewProps) => {
  const opacity = useSharedValue(isEnabled ? enabledOpacity : disabledOpacity);

  useEffect(() => {
    opacity.value = isEnabled ? enabledOpacity : disabledOpacity;
  }, [isEnabled]);

  const animatedOpacity = useAnimatedStyle(
    () => ({
      opacity: withTiming(opacity.value, {
        duration: animationDuration,
      }),
    }),
    [opacity.value],
  );

  return (
    <Animated.View style={[style, animatedOpacity]} {...rest}>
      {children}
    </Animated.View>
  );
};

export { CgFadeView };
