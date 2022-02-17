import React, { useEffect } from "react";
import { Easing, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Colors, Metrics } from "../../theme";

export interface CgSpinnerProps {
  visible?: boolean;
  style?: StyleProp<ViewStyle>;
}

const CgSpinner = ({ visible = true, style }: CgSpinnerProps) => {
  const rotation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${90 + rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 750,
        easing: Easing.bezier(0.7, 0.6, 0.4, 0.7),
      }),
      200,
    );
    return () => cancelAnimation(rotation);
  }, []);

  return (
    <>
      {visible && (
        <Animated.View style={[styles.spinner, style, animatedStyles]} />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  spinner: {
    borderBottomColor: Colors.transparent,
    borderLeftColor: Colors.white,
    borderRadius: 30,
    borderRightColor: Colors.transparent,
    borderTopColor: Colors.transparent,
    borderWidth: 7,
    height: 60,
    width: 60,
  },
});

export { CgSpinner };
