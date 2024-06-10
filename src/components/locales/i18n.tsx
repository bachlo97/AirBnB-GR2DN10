import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import en from './en/en.json'
import vi from './vi/vi.json'
//@ts-ignore
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    debug: true, 
    fallbackLng: "vi", 
    interpolation: {
      escapeValue: false, 
    },
    whitelist: [ 'en', 'vi'], 
    resources: {
      vi: {
        translation:vi ,
      },
      en: {
        translation: en,
      },
      
    },
});
export default i18n;