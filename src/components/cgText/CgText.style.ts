import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../theme";

export default StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  strike: {
    textDecorationLine: "line-through",
  },
  text: {
    color: Colors.primary,
    fontSize: Fonts.size.h2,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 24,
    textAlign: "left",
  },
});
