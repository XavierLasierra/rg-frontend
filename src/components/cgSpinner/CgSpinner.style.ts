import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ball: {
    aspectRatio: 1,
    transform: [{ rotateZ: "45deg" }],
  },
  spinner: {
    alignItems: "center",
    aspectRatio: 1,
    flex: 1,
  },
});
