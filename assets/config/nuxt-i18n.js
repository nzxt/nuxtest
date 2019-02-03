module.exports = {
  locales: [
    {
      code: 'us',
      iso: 'en-US',
      name: 'English',
      file: 'en-US.js'
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Русский',
      file: 'ru-RU.js'
    },
    {
      code: 'ua',
      iso: 'ua-UA',
      name: 'Українська',
      file: 'ua-UA.js'
    }
  ],
  defaultLocale: 'en',
  seo: false,
  lazy: true,
  langDir: 'assets/locale/',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
  parsePages: false,
  vueI18n: {
    fallbackLocale: 'en',
    // If true, vue-i18n-loader is added to Nuxt's Webpack config
    vueI18nLoader: true
  }
};
