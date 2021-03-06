import { StyleSheet } from "react-native";
import { AppStyles, Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  ...AppStyles.screen,
  bottomContainer: {
    flex: 1,
    justifyContent: "space-around",
    padding: Metrics.baseSpace,
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
  text: {
    fontSize: Fonts.size.h1,
    padding: Metrics.bigSpace,
    textAlign: "center",
    width: 270,
  },
  title: {
    fontSize: Fonts.size.h1,
    fontWeight: "bold",
    textAlign: "center",
    width: 150,
  },
  topContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    padding: Metrics.bigSpace,
  },
});
