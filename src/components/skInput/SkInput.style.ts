import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  hint: {
    color: Colors.lightGray,
    fontSize: Fonts.size.small,
    marginTop: Metrics.smallSpace,
  },
  input: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: Metrics.borderWidth,
    color: Colors.tiber,
    fontSize: Fonts.size.medium,
    fontWeight: "500",
    height: Metrics.inputSize,
  },
  inputArea: {
    height: "auto",
    lineHeight: Fonts.size.medium * 1.75,
    minHeight: Metrics.inputAreaSize,
    textAlignVertical: "top",
  },
  inputFocus: {
    borderBottomColor: Colors.secondary,
  },
  inputInvalid: {
    borderBottomColor: Colors.error,
  },
  label: {
    fontSize: Fonts.size.h2,
    fontWeight: "600",
    marginBottom: Metrics.mediumSpace,
  },
  requiredText: {
    color: Colors.error,
    position: "absolute",
    right: 0,
    top: 0,
  },
});
