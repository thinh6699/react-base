import { store } from './../apps/store'
import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from './en.json'
import translationVI from './vi.json'

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  vi: {
    translation: translationVI
  }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: { order: ['localStorage'] },
    resources,
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })

export default i18n
