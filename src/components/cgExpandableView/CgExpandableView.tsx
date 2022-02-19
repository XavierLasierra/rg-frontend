import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, ViewProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Animations } from "../../theme";

interface CgExpandableViewProps extends ViewProps {
  animationDuration?: number;
  width?: number | "auto";
  height?: number | "auto";
}

const CgExpandableView = ({
  children,
  width = "auto",
  height = "auto",
  animationDuration = Animations.duration.default,
  style,
  ...rest
}: CgExpandableViewProps) => {
  const [autoSize, setSize] = useState<{ height?: number; width?: number }>({});
  const activeHeight = useSharedValue<number | null>(null);
  const activeWidth = useSharedValue<number | null>(null);

  const getActiveHeight = (): number => {
    return typeof height === "number" ? height : autoSize.height || 0;
  };

  const getActiveWidth = (): number => {
    return typeof width === "number" ? width : autoSize.width || 0;
  };

  useEffect(() => {
    if (autoSize.height === undefined) return;
    activeHeight.value = getActiveHeight();
  }, [autoSize.height, height]);

  useEffect(() => {
    if (autoSize.width === undefined) return;
    activeWidth.value = getActiveWidth();
  }, [autoSize.width, width]);

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    if (autoSize?.height || autoSize?.width) return;
    const { height, width } = nativeEvent.layout;
    setSize({ height, width });
  };

  const animatedHeight = useAnimatedStyle(
    () =>
      activeHeight.value !== null
        ? {
            height: withTiming(activeHeight.value, {
              duration: animationDuration,
            }),
          }
        : {},
    [activeHeight.value],
  );

  const animatedWidth = useAnimatedStyle(
    () =>
      activeWidth.value !== null
        ? {
            width: withTiming(activeWidth.value, {
              duration: animationDuration,
            }),
          }
        : {},
    [activeWidth.value],
  );

  return (
    <Animated.View
      onLayout={onLayout}
      style={[style, animatedHeight, animatedWidth]}
      {...rest}>
      {children}
    </Animated.View>
  );
};

export { CgExpandableView };
