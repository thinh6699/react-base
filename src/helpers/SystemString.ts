import i18next from 'i18next'

class SystemString {
  languageDisplay(code: string) {
    switch (code) {
      case 'vi':
        return i18next.t('language.vi')
      case 'en':
        return i18next.t('language.en')
    }
  }
}

export default new SystemString()
