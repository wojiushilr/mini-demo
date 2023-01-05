import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  telemetry: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - frontend',
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // definition fronend env
  env: {
    hostUrl: process.env.TODO_APP_FRONT_HOST
      ? process.env.TODO_APP_FRONT_HOST
      : 'localhost:3000',
    apiUrl: process.env.TODO_APP_API_HOST
      ? process.env.TODO_APP_API_HOST
      : 'localhost:4000',
    hostUrlDev: process.env.TODO_APP_FRONT_HOST_DEV
      ? process.env.TODO_APP_FRONT_HOST_DEV
      : 'localhost:3000',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)s
  axios: {
    // baseURL: process.env.TODO_APP_API_HOST
    //   ? process.env.TODO_APP_API_HOST
    //   : 'localhost:4000',
      proxy: true
  },
  proxy: {
    '/api/': {
      // target: 'http://35.78.113.79/', 
      // target: 'http://todo-app-backend:4000',
      target: process.env.TODO_APP_API_HOST,
      // target: 'http://localhost:4000',
      // target: 'http://todo-app-nginx/',
      // pathRewrite: {'^/api/': '/'}
    },
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.performance.maxAssetSize = 700 * 1024
    }
  },
}