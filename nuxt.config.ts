require('dotenv').config()
const i18n = require('./config/locales')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

const API_URL = process.env.API_URL || 'http://localhost:2450'
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
    title: '[SAC]',
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
    '@mdi/font/css/materialdesignicons.css',
    'vuejs-noty/dist/vuejs-noty.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios',
    '@/plugins/vuetify',
    // '@/plugins/i18n',
    '@/plugins/noty',
    '@/plugins/filters',
    '@/plugins/flag-icon',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
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
      401: '/login/',
      404: '/notfound'
    }
  },

  /*
  ** Auth module configuration
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: `${process.env.API_URL}/api/account/login`,
            method: 'post'
          },
          logout: {
            url: `${process.env.API_URL}/api/account/logout`,
            method: 'get'
          },
          user: {
            url: `${process.env.API_URL}/api/account/getprofile`,
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
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    localStorage: false,
    cookie: true,
    scopeKey: 'scope',
    // plugins: [ '@/plugins/auth' ]
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
        });
      }

      // config.module.rules.push({
      //   resourceQuery: /blockType=i18n/,
      //   type: 'javascript/auto',
      //   loader: '@kazupon/vue-i18n-loader',
      // });
    }
  }
}
