import React from "react";
import { CgCodeInput } from "./CgCodeInput";
import { render, fireEvent } from "react-native-testing-library";

describe("CgCodeInput", () => {
  it("render as single-code-box as codeLength provided", () => {
    const codeLength = 6;

    const { getAllByTestId } = render(
      <CgCodeInput
        codeLength={codeLength}
        onChangeText={() => undefined}
        value=""
      />,
    );

    const codeBoxes = getAllByTestId("single-code-box");
    expect(codeBoxes.length).toBe(codeLength);
  });

  it("have a maxLength equal to codeLength", () => {
    const codeLength = 6;

    const { getByTestId } = render(
      <CgCodeInput
        codeLength={codeLength}
        onChangeText={() => undefined}
        value=""
      />,
    );

    const textInput = getByTestId("text-input");
    expect(textInput.props.maxLength).toBe(codeLength);
  });

  it("should render the value provided", () => {
    const codeLength = 6;
    const value = "123";

    const { queryByText } = render(
      <CgCodeInput
        codeLength={codeLength}
        onChangeText={() => undefined}
        value={value}
      />,
    );

    [...value].forEach(singleCode => {
      const code = queryByText(singleCode);
      expect(code).not.toBe(null);
    });
  });

  it("should call onChangeText with the text typed", () => {
    const codeLength = 6;
    const onChangeText = jest.fn();

    const { getByTestId } = render(
      <CgCodeInput
        codeLength={codeLength}
        onChangeText={onChangeText}
        value=""
      />,
    );
    const typedCode = "123";
    const textInput = getByTestId("text-input");
    fireEvent.changeText(textInput, typedCode);

    expect(onChangeText).toHaveBeenCalledWith(typedCode);
  });
});
