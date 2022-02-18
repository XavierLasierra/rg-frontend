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
  const opacityValue = useSharedValue(
    isEnabled ? enabledOpacity : disabledOpacity,
  );

  useEffect(() => {
    opacityValue.value = isEnabled ? enabledOpacity : disabledOpacity;
  }, [isEnabled]);

  const opacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacityValue.value, {
        duration: animationDuration,
      }),
    };
  });

  return (
    <Animated.View style={[style, opacity]} {...rest}>
      {children}
    </Animated.View>
  );
};

export { CgFadeView };
