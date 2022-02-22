import { StyleSheet } from "react-native";
import { AppStyles, Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  ...AppStyles.screen,
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: Metrics.baseSpace,
  },
  formContainer: {
    paddingHorizontal: Metrics.bigSpace,
    paddingTop: Metrics.navBarHeight,
  },
  mainContainer: {
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    flex: 1,
  },
  safeArea: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});
