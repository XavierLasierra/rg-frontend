import React, { useState } from "react";
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { SkIcon } from "../skIcon/SkIcon";

import styles from "./CgInput.style";

export interface CgInputProps extends TextInputProps {
  isInvalid?: boolean;
  hint?: string;
  containerStyle?: ViewStyle;
  required?: boolean;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  icon?: string;
  iconStyle?: StyleProp<TextStyle>;
}

const CgInput = (props: CgInputProps) => {
  const {
    value,
    isInvalid,
    hint,
    multiline,
    containerStyle,
    iconStyle,
    required,
    label,
    labelStyle,
    icon,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View
        style={[
          styles.input,
          isInvalid && styles.inputInvalid,
          isFocused && styles.inputFocus,
          ,
          containerStyle,
        ]}>
        {icon && <SkIcon style={[styles.icon, iconStyle]} name={icon}></SkIcon>}
        <TextInput
          style={[styles.textField, multiline && styles.inputArea]}
          onFocus={onFocus}
          onBlur={onBlur}
          multiline={multiline}
          value={value}
          {...rest}></TextInput>
        {required && value === "" && <Text style={styles.requiredText}>*</Text>}
        {hint && <Text style={styles.hint}>{hint}</Text>}
      </View>
    </>
  );
};

export { CgInput };
