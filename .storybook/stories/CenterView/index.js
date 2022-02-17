import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import style from "./style";

export default function CenterView({ children, center }) {
  return <View style={[style.main, center && style.centered]}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
  center: false,
};

CenterView.propTypes = {
  children: PropTypes.node,
  center: PropTypes.bool,
};
