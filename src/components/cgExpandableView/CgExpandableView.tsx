import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, ViewProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Animations } from "../../theme";

export interface IExpandableSize {
  height?: number | "auto";
  width?: number | "auto";
}
interface CgExpandableViewProps extends ViewProps {
  activeSize: number;
  sizePositions: IExpandableSize[];
  animationDuration?: number;
}

const CgExpandableView = ({
  children,
  activeSize,
  sizePositions,
  animationDuration = Animations.duration.default,
  style,
  ...rest
}: CgExpandableViewProps) => {
  const [autoSize, setSize] = useState<{ height?: number; width?: number }>({});
  const height = useSharedValue<number | null>(null);
  const width = useSharedValue<number | null>(null);

  const getActiveHeight = (): number => {
    const height =
      sizePositions[activeSize]?.height && sizePositions[activeSize].height;
    if (typeof height === "number") {
      return height;
    }
    return autoSize.height || 0;
  };

  const getActiveWidth = (): number => {
    const width =
      sizePositions[activeSize]?.width && sizePositions[activeSize].width;
    if (typeof width === "number") {
      return width;
    }
    return autoSize.width || 0;
  };

  useEffect(() => {
    if (autoSize.height === undefined) return;
    height.value = getActiveHeight();
  }, [activeSize, autoSize.height]);

  useEffect(() => {
    if (autoSize.width === undefined) return;
    width.value = getActiveWidth();
  }, [activeSize, autoSize.width]);

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    if (autoSize?.height || autoSize?.width) return;
    const { height, width } = nativeEvent.layout;
    setSize({ height, width });
  };

  const animatedHeight = useAnimatedStyle(
    () =>
      height.value !== null
        ? {
            height: withTiming(height.value, {
              duration: animationDuration,
            }),
          }
        : {},
    [height.value],
  );

  const animatedWidth = useAnimatedStyle(
    () =>
      width.value !== null
        ? {
            width: withTiming(width.value, {
              duration: animationDuration,
            }),
          }
        : {},
    [width.value],
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
