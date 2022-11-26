import I18n from "react-native-i18n";
import he from "./he";
import en from "./en";

I18n.fallbacks = true;
I18n.locale = 'he';

I18n.translations = {
  he,
  en
};

export default I18n;
