import React, { useRef } from "react";
import {
  Pressable,
  StyleProp,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";

import styles from "./SkCodeInput.style";

export interface SkCodeInputProps {
  codeLength: number;
  value: string;
  onChangeText: (text: string) => void;
  isInvalid?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const SkCodeInput = ({
  codeLength,
  value,
  onChangeText,
  isInvalid,
  disabled,
  style,
}: SkCodeInputProps) => {
  const numberOfNumbers = new Array(codeLength).fill("");
  const input = useRef<TextInput | null>(null);

  const inputFocus = () => {
    if (input && !disabled) {
      input.current?.focus();
    }
  };

  return (
    <Pressable style={[styles.codeInput, style]} onPress={inputFocus}>
      {numberOfNumbers.map((_, index) => (
        <View
          testID="single-code-box"
          style={[
            styles.singleCode,
            !!value[index] && styles.singleCodeActive,
            isInvalid && styles.singleCodeInvalid,
          ]}
          key={`${index}-code`}>
          <Text style={styles.singleCodeText}>{value[index]}</Text>
        </View>
      ))}
      <TextInput
        testID="text-input"
        ref={input}
        value={value}
        style={styles.input}
        caretHidden
        onChangeText={onChangeText}
        keyboardType="number-pad"
        maxLength={codeLength}
      />
    </Pressable>
  );
};

export { SkCodeInput };
