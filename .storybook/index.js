import { getStorybookUI, configure } from "@storybook/react-native";
import { loadStories } from "./storyLoader";

import "./rn-addons";

export const getStorybook = () => {
  configure(loadStories, module);

  return getStorybookUI({
    asyncStorage: null,
  });
};
