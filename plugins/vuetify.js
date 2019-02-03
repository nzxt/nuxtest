import Vue from 'vue'
import Vuetify from 'vuetify/lib'

// Translation provided by Vuetify
import en from 'vuetify/es5/locale/en'
import ru from 'vuetify/es5/locale/ru'
import uk from 'vuetify/es5/locale/uk'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  lang: {
    locales: { uk, ru, en },
    current: 'ru'
  },
  theme: {
    primary: '#121212', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
