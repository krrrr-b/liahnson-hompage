import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "languages/en.json";
import ko from "languages/ko.json";

import LanguageDetector from 'i18next-browser-languagedetector';

const params = getUrlParams();
let lang = params['lang'];

if (!(lang == "ko" || lang == "en")) {
  lang = "en";
}

function getUrlParams() {     
  var params = {};  
  
  location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
    function(str, key, value) { 
        params[key] = value; 
      }
  );     
  
  return params; 
}

i18n.language = lang ? lang : i18n.language;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
    },
    lng: i18n.language,
    fallbackLng: {
      "ko-KR": ["ko-KR"],
      default: ["en-US"],
    },
    debug: false,
    defaultNS: "translation",
    ns: "translation",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;