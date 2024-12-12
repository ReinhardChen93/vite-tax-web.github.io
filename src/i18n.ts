import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// 直接导入 JSON 文件
import enTranslations from '../public/locales/en/translation.json';
import zhCNTranslations from '../public/locales/zh-CN/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      'zh-CN': {
        translation: zhCNTranslations,
      },
    },
    lng: 'zh-CN',
    fallbackLng: 'zh-CN',
    supportedLngs: ['en', 'zh-CN'],
    debug: import.meta.env.DEV,
    
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    // },
    
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;