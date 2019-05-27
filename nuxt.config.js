// nuxt.config.js
var path = require('path');

const fastSassLoader = {
  loader: 'fast-sass-loader',
  options: {
    include: [
      path.resolve(__dirname, 'assets/scss')
    ]
  }
};

function isVueRule(rule) {
  return (rule.test.toString() === '/\\.vue$/');
}

function isSassRule(rule) {
  return (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1);
}
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: "omo earth",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: "the power of movement"
      },
      {
        name: "theme-color",
        content: "#ffffff"
      }
    ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    //   { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-touch-icon.png" },
    //   { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    //   { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    //   { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
    //   { rel: "shortcut icon", href: "/favicon.ico" }
    // ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  router: {
    middleware: 'default-routes'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~plugins/nuxt-vue-select',
      ssr: false
    },
    {
      src: '~plugins/nuxt-swiper-plugin',
      ssr: false
    },
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

  // styleResources: {
  //   scss: [
  //     './assets/theme.scss',
  //   ]
  // },

  css: [
    // (...)
    './assets/theme.scss',
    'swiper/dist/css/swiper.css'
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://omo-api.herokuapp.com',
        // wsEndpoint: 'wss://eu1.prisma.sh/samuel-andert-d264c8/stylearth/dev',
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.options.loaders.sass.push(fastSassLoader);
          rule.options.loaders.scss.push(fastSassLoader);
        }

        if (isSassRule(rule)) {
          rule.use.push(fastSassLoader);
        }
      });
    }
  },

  fontawesome: {
    imports: [{
      set: '@fortawesome/free-solid-svg-icons',
      icons: ['fas']
    }, ],
  },

  generate: {
    workers: 4,
    workerConcurrency: 500,
    concurrency: 500,
  }
};
