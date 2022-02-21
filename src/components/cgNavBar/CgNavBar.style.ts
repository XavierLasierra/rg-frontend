import { StyleSheet } from "react-native";

import { Metrics, Colors, Fonts } from "../../theme";

export default StyleSheet.create({
  backIcon: {
    alignSelf: "center",
    color: Colors.primary,
    fontSize: Metrics.icons.medium,
  },
  backRoundIcon: {
    alignSelf: "center",
    backgroundColor: Colors.white,
    fontSize: Metrics.icons.medium,
  },
  barButton: {
    alignSelf: "center",
    justifyContent: "center",
    width: Metrics.buttonSize,
  },
  centered: {
    alignSelf: "center",
  },
  leftContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    minWidth: Metrics.buttonSize,
  },
  navBar: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flexDirection: "row",
    height: Metrics.navBarHeight,
    justifyContent: "flex-start",
    zIndex: 1,
  },
  rightContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    minWidth: Metrics.buttonSize,
  },
  roundedIcon: {
    backgroundColor: Colors.white90,
  },
  shadow: {
    elevation: 4,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
  title: {
    color: Colors.primary,
    fontSize: Fonts.size.big,
    fontWeight: "bold",
  },
  titleWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Metrics.smallSpace,
  },
  transparent: {
    backgroundColor: Colors.transparent,
    left: 0,
    paddingHorizontal: Metrics.mediumSpace,
    position: "absolute",
    right: 0,
  },
});
