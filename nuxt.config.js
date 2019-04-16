export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "stylearth",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "the power of movement" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "shortcut icon", href: "/favicon.ico" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  router: {
    base: '/'
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/nuxt-vue-select', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [ 
    'nuxt-buefy', 
    'nuxt-fontawesome', 
    'nuxt-leaflet', 
    '@nuxtjs/apollo', 
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      './assets/theme.scss',
      ]
  },

  css: [
    // (...)
    './assets/theme.scss'
  ],
  
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://minga-service.herokuapp.com',
        // wsEndpoint: 'wss://eu1.prisma.sh/samuel-andert-d264c8/stylearth/dev',
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    // vendor: ['leaflet-routing-machine'],
  
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ],
  },
}

