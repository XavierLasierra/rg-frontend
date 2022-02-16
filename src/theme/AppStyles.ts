import { Metrics } from ".";
import { Colors } from "./Colors";

const AppStyles = {
  screen: {
    safeArea: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    darkSafeArea: {
      flex: 1,
      backgroundColor: Colors.secondary,
    },
    mainScreen: {
      flex: 1,
      backgroundColor: Colors.mainBackground,
      paddingHorizontal: Metrics.mediumSpace,
    },
    lightScreen: {
      flex: 1,
      backgroundColor: Colors.white,
      paddingHorizontal: Metrics.mediumSpace,
    },
  },
};

export { AppStyles };
