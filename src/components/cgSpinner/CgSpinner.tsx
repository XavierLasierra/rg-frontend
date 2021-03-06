import React, { useEffect } from "react";
import { ColorValue, StyleProp, ViewStyle } from "react-native";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

import { Animations, Colors, Metrics } from "../../theme";
import styles from "./CgSpinner.style";

const CIRCLE_DEG = 360;
const ANIMATION_REPETITIONS = 100;

export interface CgSpinnerProps {
  visible?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  animationDuration?: number;
  ballColor?: ColorValue;
  ballSize?: "small" | "medium" | "large";
  modal?: boolean;
}

const ballHeights = Metrics.loadingBall;

const CgSpinner = ({
  visible = true,
  animationDuration = Animations.duration.long,
  containerStyle,
  ballColor = Colors.secondary,
  ballSize = "medium",
  modal = false,
}: CgSpinnerProps) => {
  const rotation = useSharedValue(0);
  const position = useSharedValue(-Metrics.navBarHeight * 2);
  const ballHeight = ballHeights[ballSize];

  const startRotation = () => {
    rotation.value = withRepeat(
      withTiming(CIRCLE_DEG, {
        duration: animationDuration,
        easing: Easing.bezierFn(0.7, 0.6, 0.4, 0.7),
      }),
      ANIMATION_REPETITIONS,
    );
  };

  const startAppereance = () => {
    position.value = withTiming(Metrics.navBarHeight, {
      duration: Animations.duration.short,
      easing: Easing.linear,
    });
  };

  useEffect(() => {
    if (visible) {
      startRotation();
      if (modal) {
        startAppereance();
      }
    } else {
      cancelAnimation(rotation);
    }
    return () => cancelAnimation(rotation);
  }, [visible]);

  const animatedSpinnerStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    }),
    [rotation.value],
  );

  const animatedBallStyles = useAnimatedStyle(
    () => ({
      borderBottomLeftRadius:
        (Math.abs(rotation.value - CIRCLE_DEG / 2) / CIRCLE_DEG) * ballHeight,
    }),
    [rotation.value],
  );

  const animatedAppereance = useAnimatedStyle(
    () => ({
      top: position.value,
    }),
    [rotation.value],
  );

  const ballStyle = {
    backgroundColor: ballColor,
    borderBottomRightRadius: ballHeight * 0.5,
    borderTopLeftRadius: ballHeight * 0.5,
    borderTopRightRadius: ballHeight * 0.5,
    height: ballHeight,
  };

  return (
    <>
      {visible && (
        <Animated.View
          style={[
            modal && styles.modal,
            modal && animatedAppereance,
            containerStyle,
          ]}>
          <Animated.View style={[styles.spinner, animatedSpinnerStyle]}>
            <Animated.View
              style={[styles.ball, ballStyle, animatedBallStyles]}
            />
          </Animated.View>
        </Animated.View>
      )}
    </>
  );
};

export { CgSpinner };
