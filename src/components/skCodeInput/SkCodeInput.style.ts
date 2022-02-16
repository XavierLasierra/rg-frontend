import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  codeInput: {
    flexDirection: "row",
    minHeight: Metrics.inputSize,
  },
  input: {
    height: 0,
    width: 0,
  },
  singleCode: {
    borderBottomWidth: Metrics.doubleBorderWith,
    borderColor: Colors.gray,
    flex: 1,
    marginHorizontal: Metrics.tinySpace,
    minHeight: Metrics.inputSize,
    padding: Metrics.smallSpace,
  },
  singleCodeActive: {
    borderColor: Colors.secondary,
  },
  singleCodeInvalid: {
    borderColor: Colors.error,
  },
  singleCodeText: {
    color: Colors.primary,
    fontSize: Fonts.size.big,
    fontWeight: "500",
    textAlign: "center",
  },
});
