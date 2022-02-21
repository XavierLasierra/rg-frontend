import { StyleSheet } from "react-native";
import { AppStyles, Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  ...AppStyles.screen,
  codeInput: {
    paddingVertical: Metrics.bigSpace,
  },
  container: {
    justifyContent: "space-between",
  },
  email: {
    color: Colors.secondaryDark,
  },
  title: {
    fontSize: Fonts.size.h1,
    lineHeight: Fonts.size.h1 * 1.5,
    marginTop: Metrics.navBarHeight,
    textAlign: "center",
  },
});
