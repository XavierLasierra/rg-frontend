import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const { width, height } = Dimensions.get("window");
const statusBarHeight = getStatusBarHeight();

const Metrics = {
  statusBarHeight,
  navBarHeight: 50,
  tabBarHeight: 80,
  buttonSize: 65,
  buttonMediumSize: 45,
  buttonSmallSize: 30,
  roundButtonSize: 48,
  backButtonSize: 48,
  buttonRadius: 24,
  buttonBorderWidth: 2,
  borderWidth: 1,
  doubleBorderWith: 2,
  quadrupleBorderWith: 4,
  mediumBorderWidth: 3,
  inputSize: 45,
  menuHeight: 78,
  inputAreaSize: 70,
  bigSpace: 24,
  baseSpace: 16,
  mediumSpace: 15,
  smallSpace: 8,
  miniSpace: 4,
  tinySpace: 2,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  touchableOpacity: 0.8,
  borderRadius: 4,
  buttonBorderRadius: 50,
  doubleRadius: 8,
  quadrupleRadius: 16,
  icons: {
    tiny: 5,
    mini: 10,
    small: 15,
    medium: 20,
    large: 25,
    xl: 50,
  },
  rowHeight: 160,
  panelHeight: 128,
  avatar: {
    small: 30,
    medium: 40,
    large: 128,
  },
  circleLabel: 60,
  loadingBall: {
    small: 10,
    medium: 13,
    large: 20,
  },
};

export { Metrics };
