import i18n from 'i18n-js';
import he from "./he";
import en from "./en";

i18n.fallbacks = true;
i18n.translations = { he, en };
i18n.locale = 'he';

export default i18n;
