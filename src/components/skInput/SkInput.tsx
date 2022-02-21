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

import styles from "./SkInput.style";

export interface SkInputProps extends TextInputProps {
  isInvalid?: boolean;
  hint?: string;
  containerStyle?: ViewStyle;
  required?: boolean;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  icon?: string;
  iconStyle?: StyleProp<TextStyle>;
}

const SkInput = (props: SkInputProps) => {
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
      <View style={[styles.input, containerStyle]}>
        {icon && <SkIcon style={[styles.icon, iconStyle]} name={icon}></SkIcon>}
        <TextInput
          style={[
            multiline && styles.inputArea,
            isInvalid && styles.inputInvalid,
            isFocused && styles.inputFocus,
          ]}
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

export { SkInput };
