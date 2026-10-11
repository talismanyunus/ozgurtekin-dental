import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import english from './Lang/English.json';
import italian from './Lang/Italian.json';
import albanian from './Lang/albanian.json';
import turkish from './Lang/turkish.json';

// Desteklenen diller
const supportedLangs = ["en", "it", "sq", "tr"];

// Tarayıcı dilini al, desteklenmiyorsa İtalyanca kullan
const browserLang = navigator.language?.split("-")[0];
const defaultLang = supportedLangs.includes(browserLang) ? browserLang : "it";

i18n
    .use(initReactI18next)
    .init({
        resources: {
        en: {translation: english},
        it: {translation: italian},
        sq: {translation: albanian},
        tr: {translation: turkish},
        },
        lng: defaultLang,
        fallbackLng: "it",

        interpolation: {
        escapeValue: false,
        },
    })

export { defaultLang };
