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
  const height = useSharedValue(0);
  const width = useSharedValue(0);

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
    height.value = getActiveHeight();
  }, [activeSize, autoSize.height]);

  useEffect(() => {
    width.value = getActiveWidth();
  }, [activeSize, autoSize.width]);

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { height, width } = nativeEvent.layout;
    setSize({ height, width });
  };

  const animatedContainer = useAnimatedStyle(() => {
    return autoSize.width && autoSize.height
      ? {
          height: withTiming(height.value, {
            duration: animationDuration,
          }),
          width: withTiming(width.value, {
            duration: animationDuration,
          }),
        }
      : {};
  });
  return (
    <Animated.View
      onLayout={onLayout}
      style={[style, animatedContainer]}
      {...rest}>
      {children}
    </Animated.View>
  );
};

export { CgExpandableView };
