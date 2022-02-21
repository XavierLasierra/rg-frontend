import React from "react";
import { CgNavBar } from "./CgNavBar";
import { render, fireEvent } from "react-native-testing-library";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native");

describe("CgNavBar", () => {
  it("render titleComponent if it is provided", () => {
    const { queryByTestId } = render(
      <CgNavBar titleComponent={<View testID="title-component" />} />,
    );

    const titleComponent = queryByTestId("title-component");
    expect(titleComponent).toBeTruthy();
  });

  it("render a Text with title if there is not titleComponent", () => {
    const titleText = "A title";
    const { queryByText } = render(<CgNavBar title={titleText} />);

    const title = queryByText(titleText);
    expect(title).toBeTruthy();
  });

  it("render a back button if back prop", () => {
    const { queryByTestId } = render(<CgNavBar back />);

    const backButton = queryByTestId("back-button");
    expect(backButton).toBeTruthy();
  });

  it("render a transparent back button if back and transparent prop", () => {
    const { queryByTestId } = render(<CgNavBar back transparent />);

    const backButton = queryByTestId("back-button-transparent");
    expect(backButton).toBeTruthy();
  });

  it("calls navigation.goBack it backButton is pressed", () => {
    (useNavigation as jest.Mock).mockReturnValue({
      goBack: jest.fn(),
    });
    const { getByTestId } = render(<CgNavBar back />);

    const backButton = getByTestId("back-button");
    fireEvent.press(backButton);

    const goBack = useNavigation().goBack;
    expect(goBack).toHaveBeenCalled();
  });

  it("render components provided in rightActions", () => {
    const { queryByTestId } = render(
      <CgNavBar rightActions={[<View key="" testID="right-actions" />]} />,
    );

    const rightActions = queryByTestId("right-actions");
    expect(rightActions).toBeTruthy();
  });

  it("render close button if modal prop", () => {
    const { queryByTestId } = render(<CgNavBar modal />);

    const closeButton = queryByTestId("close-button");
    expect(closeButton).toBeTruthy();
  });
});
