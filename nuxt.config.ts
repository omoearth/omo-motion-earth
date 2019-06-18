import NuxtConfiguration from "@nuxt/config";
require("dotenv").config();

const config: NuxtConfiguration = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "omo earth",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "the power of movement"
      },
      {
        name: "theme-color",
        content: "#ffffff"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Delius|Palanquin+Dark:700|Palanquin:100,300,500&display=swap"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  // router: {
  //   base: "/",
  //   middleware: "default-routes"
  // },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~plugins/nuxt-swiper-plugin",
      mode: "client"
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "nuxt-rfg-icon",
    "nuxt-buefy",
    "nuxt-leaflet",
    "@nuxtjs/apollo",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  middleware: ["authentication"],
  css: ["./assets/theme.scss", "swiper/dist/css/swiper.css"],

  axios: {
    proxy: true,
    withCredentials: true
  },

  proxy: {
    "/api": {
      target: process.env.EARTH_API_ENDPOINT,
      pathRewrite: { "^/api": "" }
    }
  },

  apollo: {
    includeNodeModules: true,
    // errorHandler: "~/plugins/apollo-error-handler.ts",
    clientConfigs: {
      default: {
        httpEndpoint: process.env.EARTH_HTTP_ENDPOINT,
        wsEndpoint: process.env.EARTH_WS_ENDPOINT,
        httpLinkOptions: {
          uri: "/api",
          credentials: "same-origin"
        }
      }
    }
  },
  "rfg-icon": {
    rfg: {
      design: {
        ios: {
          pictureAspect: "backgroundAndMargin",
          backgroundColor: "#fafafa",
          margin: "35%",
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: true,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true
          }
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: "noChange",
          backgroundColor: "#fafafa",
          onConflict: "override",
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false
            }
          }
        },
        androidChrome: {
          pictureAspect: "shadow",
          themeColor: "#fafafa",
          manifest: {
            name: "°motion",
            display: "standalone",
            orientation: "notSet",
            onConflict: "override",
            declared: true
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false
          }
        },
        safariPinnedTab: {
          pictureAspect: "silhouette",
          themeColor: "#3fbe79"
        }
      },
      settings: {
        scalingAlgorithm: "Mitchell",
        errorOnImageTooSmall: false,
        readmeFile: false,
        htmlCodeFile: false,
        usePathAsIs: false
      }
    }
  }
};

export default config;
