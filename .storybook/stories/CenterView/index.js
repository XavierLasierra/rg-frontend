import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import style from "./style";

export default function CenterView({ children, vertical }) {
  return (
    <View style={vertical ? style.alignVertical : style.main}>{children}</View>
  );
}

CenterView.defaultProps = {
  children: null,
  vertical: false,
};

CenterView.propTypes = {
  children: PropTypes.node,
  vertical: PropTypes.bool,
};
