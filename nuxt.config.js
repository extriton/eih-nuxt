module.exports = {
  /*
  ** Host and port
  */
  server: {
    port: 80,
    host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'eih-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: { 
            url: '/auth/logout', 
            method: 'post' 
          },
          user: { 
            url: '/user/account', 
            method: 'get', 
            propertyName: false
          }
        }
      }
    }
  },
  axios: {
    baseURL: 'http://192.168.0.41:3000',
    credentials: false
  },
}
