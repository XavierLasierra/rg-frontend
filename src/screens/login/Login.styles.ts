import { StyleSheet } from "react-native";
import { AppStyles, Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  ...AppStyles.screen,
  SignUpButton: {
    top: Metrics.bigSpace,
  },
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
    alignItems: "center",
    top: Metrics.bigSpace,
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
  icon: {
    color: Colors.secondary,
    fontSize: Metrics.icons.medium,
    marginRight: 10,
  },
  image: {
    aspectRatio: 1.5,
  },
  imageContainer: {
    paddingVertical: Metrics.mediumSpace,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
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
    paddingTop: Metrics.bigSpace,
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
  },
  topContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: Metrics.baseSpace,
  },
  url: {
    color: Colors.secondary,
  },
  urlText: {
    color: Colors.secondary,
  },
});
