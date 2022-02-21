import React from "react";
import ParsedText, {
  ParsedTextProps,
  ParseShape,
} from "react-native-parsed-text";

import styles from "./CgText.style";

export type CgTextProps = ParsedTextProps;

const CgText = (props: CgTextProps) => {
  const { children, parse, ...rest } = props;

  const renderText = (_: string, match: string[]) => {
    return match[2];
  };

  const parseOptions = () => {
    let parseOptions: ParseShape[] = [
      {
        pattern: /(_~)(.+)(~_)/g,
        style: styles.strike,
        renderText: renderText,
      },
      {
        pattern: /(__)(.+)(__)/g,
        style: styles.italic,
        renderText: renderText,
      },
      {
        pattern: /(_[*])(.+)([*]_)/g,
        style: styles.bold,
        renderText: renderText,
      },
    ];

    if (parse) {
      parseOptions = [...parseOptions, ...parse];
    }
    return parseOptions;
  };

  return (
    <ParsedText style={styles.text} parse={parseOptions()} {...rest}>
      {children}
    </ParsedText>
  );
};

export { CgText };
