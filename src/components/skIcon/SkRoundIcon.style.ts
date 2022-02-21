import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../theme";

export default StyleSheet.create({
  icon: {
    color: Colors.white,
  },
  largeCircle: {
    borderRadius: Metrics.icons.large * 1.5,
    height: Metrics.icons.large * 3,
    width: Metrics.icons.large * 3,
  },
  largeIcon: {
    fontSize: Metrics.icons.large,
  },
  mediumCircle: {
    borderRadius: Metrics.icons.medium * 1.5,
    height: Metrics.icons.medium * 3,
    width: Metrics.icons.medium * 3,
  },
  mediumIcon: {
    fontSize: Metrics.icons.medium,
  },
  rounded: {
    alignItems: "center",
    backgroundColor: Colors.darkGray,
    justifyContent: "center",
  },
  smallCircle: {
    borderRadius: Metrics.icons.small * 1.5,
    height: Metrics.icons.small * 3,
    width: Metrics.icons.small * 3,
  },
  smallIcon: {
    fontSize: Metrics.icons.small,
  },
});
