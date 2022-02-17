import React from "react";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../../../.storybook/stories/CenterView";
import { CgButton } from "./CgButton";

storiesOf("CgButton", module)
  .addDecorator(getStory => <CenterView vertical>{getStory()}</CenterView>)
  .add("primary button", () => (
    <CgButton type="primary" text="Continue" loading={false} />
  ))
  .add("primary button loading", () => (
    <CgButton type="primary" text="Continue" loading />
  ))
  .add("primary button medium", () => (
    <CgButton type="primary" size="medium" text="Continue" />
  ))
  .add("primary button small", () => (
    <CgButton type="primary" size="small" text="Continue" />
  ))
  .add("transparent button", () => (
    <CgButton type="transparent" text="Continue" />
  ))
  .add("secondary button", () => <CgButton type="secondary" text="Done" />)
  .add("secure button", () => <CgButton type="secure" text="Continue" />)
  .add("cancel button", () => <CgButton type="cancel" text="Delete" />)
  .add("button is disabled", () => <CgButton text="Continue" disabled />);
