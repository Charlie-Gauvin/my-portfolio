import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";

i18n
  .use(initReactI18next) // Passer i18n à react-i18next
  .use(languageDetector) // Passer i18n à i18next-browser-languagedetector
  .init({
    lng: 'en', // langue par défaut
    fallbackLng: 'en', // langue de secours
    resources: {
      en: { translation : enTranslation },
      fr: { translation : frTranslation }
    },
    interpolation: {
      escapeValue: false // React s'occupe de cela
    }
  });

export default i18n;