import React, { ReactChild } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface CgExpandableViewProps {
  children?: ReactChild;
  isOpen: boolean;
  openHeight: number;
  closedHeight: number;
  style?: StyleProp<ViewStyle>;
}

const CgExpandableView = ({
  children,
  isOpen,
  openHeight,
  closedHeight,
  style,
}: CgExpandableViewProps) => {
  const animatedContainer = useAnimatedStyle(() => {
    return {
      height: withTiming(isOpen ? openHeight : closedHeight, {
        duration: 500,
      }),
    };
  });

  return (
    <Animated.View style={[style, animatedContainer]}>{children}</Animated.View>
  );
};

export { CgExpandableView };
