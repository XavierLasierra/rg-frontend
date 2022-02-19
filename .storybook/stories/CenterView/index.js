import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import style from "./style";

export default function CenterView({ children, centered }) {
  return (
    <View style={[style.main, centered && style.centered]}>{children}</View>
  );
}

CenterView.defaultProps = {
  children: null,
  centered: false,
};

CenterView.propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
};
