import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'omo earth',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'the power of movement'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Delius|Palanquin+Dark:700|Palanquin:100,300,500&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~plugins/nuxt-swiper-plugin',
      mode: 'client'
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-buefy',
    'nuxt-leaflet',
    '@nuxtjs/apollo',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  css: ['./assets/theme.scss', 'swiper/dist/css/swiper.css'],

  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.omo.earth',
        wsEndpoint: 'wss://api.omo.earth'
      }
    }
  }
}

export default config
