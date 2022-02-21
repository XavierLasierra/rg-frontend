import { StyleSheet } from "react-native";
import { AppStyles, Colors, Metrics } from "../../theme";

export default StyleSheet.create({
  ball: {
    aspectRatio: 1,
    transform: [{ rotateZ: "45deg" }],
  },
  modal: {
    aspectRatio: 1,
    backgroundColor: Colors.white,
    borderRadius: Metrics.buttonMediumSize * 0.5,
    height: Metrics.buttonMediumSize,
    position: "absolute",
    ...AppStyles.shadow.big,
    alignSelf: "center",
    top: -Metrics.navBarHeight * 2,
    zIndex: 99,
  },
  spinner: {
    alignItems: "center",
    aspectRatio: 1,
    flex: 1,
  },
});
