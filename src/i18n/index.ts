import { getLocales } from "react-native-localize";

import i18n from "i18n-js";
// Set the key-value pairs for the different languages you want to support.
import en from "./languages/en.json";

const locales = getLocales();

i18n.defaultLocale = "en";

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
i18n.fallbacks = true;

i18n.translations = {
  en,
};
// Set the locale once at the beginning of your app.

const { languageCode } = locales[0];
i18n.locale = languageCode;

export { i18n };
