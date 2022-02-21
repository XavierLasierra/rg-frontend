import React from "react";
import { storiesOf } from "@storybook/react-native";
import { CgNavBar } from "./CgNavBar";
import { NavigationContainer } from "@react-navigation/native";

const title = "A title";

storiesOf("CgNavBar", module)
  .addDecorator(getStory => (
    <NavigationContainer>{getStory()}</NavigationContainer>
  ))
  .add("rendered with title", () => <CgNavBar title={title} />)
  .add("rendered with title and back button", () => (
    <CgNavBar title={title} back />
  ))
  .add("rendered transparent with title and back button", () => (
    <CgNavBar title={title} back transparent />
  ))
  .add("rendered with title and is a modal", () => (
    <CgNavBar title={title} modal />
  ));
