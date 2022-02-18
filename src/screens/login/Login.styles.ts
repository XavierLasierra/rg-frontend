import { StyleSheet } from "react-native";
import { AppStyles, Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  ...AppStyles.screen,
  blueFigure: {
    alignSelf: "center",
    backgroundColor: Colors.secondaryDark,
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 60,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 120,
    height: 297,
    position: "absolute",
    top: 146,
    width: 291,
  },
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
    marginTop: -Metrics.statusBarHeight,
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
    padding: Metrics.baseSpace,
  },
  text: {
    alignSelf: "center",
    color: Colors.gray,
    fontSize: Fonts.size.h2,
    fontWeight: "400",
    paddingHorizontal: 30,
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
  },
});
