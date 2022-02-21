import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  hint: {
    color: Colors.gray,
    fontSize: Fonts.size.small,
    marginTop: Metrics.smallSpace,
  },
  icon: {
    color: Colors.secondary,
    fontSize: Metrics.icons.medium,
    marginRight: Metrics.smallSpace,
    width: Metrics.icons.large,
  },
  input: {
    alignItems: "center",
    borderBottomColor: Colors.gray,
    borderBottomWidth: Metrics.borderWidth,
    color: Colors.tiber,
    flexDirection: "row",
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
