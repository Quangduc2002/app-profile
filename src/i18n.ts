import i18n from 'i18next';
import Languagedetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Languagedetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    ns: ['home'],
    supportedLngs: ['vi', 'en'],
    fallbackNS: 'vi',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
  });
