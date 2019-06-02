import NuxtConfiguration from "@nuxt/config";

require("dotenv").config();

const HTTP = process.env.SECURE === "true" ? "https://" : "http://";
const WEBSOCKET = process.env.SECURE === "true" ? "wss://" : "ws://";
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
    // proxy: true,
    withCredentials: true
  },

  // proxy: {
  //   "/api": {
  //     target: `${HTTP}${process.env.EARTH_API_URL}${
  //       process.env.EARTH_API_PORT
  //     }`,
  //     pathRewrite: { "^/api": "" }
  //   }
  // },

  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: {
        httpEndpoint: `${HTTP}${process.env.EARTH_API_URL}${
          process.env.EARTH_PORT
        }`,
        wsEndpoint: `${WEBSOCKET}${process.env.EARTH_API_URL}${
          process.env.EARTH_PORT
        }`,
        httpLinkOptions: {
          // uri: "/api",
          credentials: "same-origin"
        }
      }
    }
  }
};

export default config;
