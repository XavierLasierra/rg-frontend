import { getStorybookUI } from "@storybook/react-native";

import "./";

const StorybookUIRoot = getStorybookUI({
  isUIHidden: false,
  onDeviceUI: true,
  asyncStorage: null,
});

export default StorybookUIRoot;
