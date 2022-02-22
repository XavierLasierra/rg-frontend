import { StyleSheet } from "react-native";
import { AppStyles, Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  ...AppStyles.screen,
  blueFigure: {
    alignSelf: "center",
    backgroundColor: Colors.secondaryDark,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 200,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    position: "absolute",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
    marginTop: -Metrics.statusBarHeight,
    overflow: "hidden",
    paddingTop: Metrics.statusBarHeight,
  },
  expandableContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: Metrics.bigSpace,
  },
  forgotButton: {
    height: "auto",
  },
  forgotButtonText: {
    color: Colors.primary,
    fontSize: Fonts.size.medium,
    fontWeight: "500",
  },
  icon: {
    color: Colors.secondary,
    fontSize: Metrics.icons.medium,
    marginRight: 10,
  },
  image: {
    aspectRatio: 1.5,
  },
  inputContainer: {
    flexDirection: "row",
  },
  smallText: {
    fontSize: Fonts.size.medium,
    lineHeight: Fonts.size.medium * 1.5,
    paddingHorizontal: Metrics.bigSpace,
    textAlign: "center",
  },
  startButton: {
    height: "100%",
  },
  startButtonText: {
    color: Colors.darkGray,
    fontSize: 20,
    fontWeight: "300",
  },
  submitButton: {
    paddingVertical: Metrics.mediumSpace,
  },
  text: {
    color: Colors.gray,
    fontSize: Fonts.size.h2,
    fontWeight: "400",
    textAlign: "center",
  },
  titleTop: {
    alignSelf: "center",
    color: Colors.white,
    fontSize: 30,
    fontWeight: "300",
    zIndex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: Metrics.baseSpace,
  },
  urlText: {
    color: Colors.secondary,
  },
});
