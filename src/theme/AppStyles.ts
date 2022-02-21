import { Metrics, Colors } from ".";

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
  shadow: {
    big: {
      shadowColor: Colors.primary,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
  },
};

export { AppStyles };
