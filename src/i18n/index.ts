import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import nb from './locales/nb.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      nb: { translation: nb },
    },
    lng: localStorage.getItem('language') || 'nb',
    fallbackLng: 'nb',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
