require('dotenv').config()
const i18n = require('./config/locales')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

const API_URL = process.env.BASE_URL || 'http://localhost:2450'
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'spa',
  modern: !isDev,
  env: {
    API_URL,
    DESCRIPTION: pkg.description
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '[Sales Assessment Center]',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Exo+2:300,400,500,600|Roboto:300,400,500,600|Material+Icons'
      }
    ]
  },

  manifest: {
    name: "[SAC] Nuxt.JS+Typescript",
    short_name: "Nuxt.JS+TS",
    description: "[SAC] Nuxt.JS template built driven by Typescript",
    theme_color: "#188269"
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '@mdi/font/css/materialdesignicons.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios',
    '@/plugins/vuetify',
    '@/plugins/filters'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    ['nuxt-i18n', i18n]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    debug: isDev,
    proxy: false,
    credentials: true,
    baseURL: API_URL,
    redirectError: {
      401: '/account/login',
      404: '/notfound'
    }
  },
  auth: {
    strategies: {
      local: {
        // _scheme: 'local',
        endpoints: {
          login: {
            url: `${process.env.BASE_URL}/api/Account/login`,
            method: 'post'
          },
          logout: {
            url: `${process.env.BASE_URL}/api/Account/logout`,
            method: 'get'
          },
          user: {
            url: `${process.env.BASE_URL}/api/Account/getProfile`,
            method: 'get',
            propertyName: '' // propertyName needs to be exact equal ''
          }
        },
        tokenRequired: false
      }
    },
    watchLoggedIn: true,
    rewriteRedirects: true,
    resetOnError: true,
    redirect: {
      login: '/account/login/',
      logout: '/account/login/',
      callback: false,
      home: '/'
    },
    localStorage: false,
    cookie: false,
    // scopeKey: 'scope',
    plugins: [ '@/plugins/auth' ]
  },
  router: {
    middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config: any, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
