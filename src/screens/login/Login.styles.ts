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
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
    marginTop: -Metrics.statusBarHeight,
    overflow: "hidden",
    paddingTop: Metrics.statusBarHeight,
  },
  expandableContainer: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  image: {
    aspectRatio: 1.5,
  },
  imageContainer: {
    paddingVertical: Metrics.mediumSpace,
  },
  text: {
    color: Colors.gray,
    fontSize: Fonts.size.h2,
    fontWeight: "400",
    textAlign: "center",
  },
  titleBottom: {
    alignSelf: "center",
    color: Colors.darkGray,
    fontSize: 20,
    fontWeight: "300",
    padding: 50,
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
});
