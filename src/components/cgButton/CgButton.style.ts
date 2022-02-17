import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../theme";

export default StyleSheet.create({
  cancel: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.cancel,
    borderWidth: Metrics.buttonBorderWidth,
  },
  cancelText: {
    color: Colors.cancel,
  },
  default: {
    alignItems: "center",
    backgroundColor: Colors.secondary,
    borderRadius: Metrics.buttonBorderRadius,
    height: Metrics.buttonSize,
    justifyContent: "center",
    paddingHorizontal: Metrics.baseSpace,
  },
  defaultText: {
    color: Colors.white,
    fontSize: Fonts.size.big,
    fontWeight: "bold",
  },
  disabled: {
    backgroundColor: Colors.gray,
  },
  disabledText: {
    color: Colors.white,
  },
  mediumButton: {
    height: Metrics.buttonMediumSize,
  },
  mediumText: {
    fontSize: Fonts.size.medium,
  },
  secondary: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.secondary,
    borderWidth: Metrics.buttonBorderWidth,
  },
  secondaryText: {
    color: Colors.secondary,
  },
  smallButton: {
    height: Metrics.buttonSmallSize,
  },
  smallText: {
    fontSize: Fonts.size.small,
  },
  transparent: {
    backgroundColor: Colors.transparent,
    borderRadius: Metrics.buttonBorderRadius,
    color: Colors.secondary,
  },
  transparentText: {
    color: Colors.secondary,
  },
});
