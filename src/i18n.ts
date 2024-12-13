import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // i18next-http-backend 是一个用于 i18next 的插件，帮助从服务器加载翻译文件。它通过 HTTP 请求从指定的服务器端点获取翻译资源，这对于需要动态加载多语言内容的应用程序非常有用。
import LanguageDetector from 'i18next-browser-languagedetector';
// 直接导入 JSON 文件
// import enTranslations from '../public/locales/en/translation.json';
// import zhCNTranslations from '../public/locales/zh-CN/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // resources: {
    //   en: {
    //     translation: enTranslations,
    //   },
    //   'zh-CN': {
    //     translation: zhCNTranslations,
    //   },
    // },
    lng: 'zh-CN',
    fallbackLng: 'zh-CN',
    supportedLngs: ['en', 'zh-CN'],
    debug: import.meta.env.DEV,
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;