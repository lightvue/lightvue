require('dotenv').config();

export default {
  srcDir: 'src/',
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'LightVue | The Ultimate UI Component Library for Vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue | Emerging Collection of well Crafted UI Components' },
      { property: 'og:image', content: 'https://lightvue.org/icon.png' },
      {
        property: 'og:site_name',
        content: 'LightVue | Emerging Collection of well Crafted UI Components',
      },
      {
        property: 'og:description',
        content: 'The Ultimate Component Library for Vue 2 & Vue 3',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Light Vue is the Ultimate Component Library for Vue 2 & Vue 3',
      },
      {
        name: 'google-site-verification',
        content: 'QMiXd8kXdh7FF6dlfvLlF-PO4OJKHmtmINPfpwuigpU',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/lightvue.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['plugins/global.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://lightvue.org',
    gzip: true,
    filter({ routes }) {
      return routes.map(route => {
        route.url = `${route.url}/`;
        return route;
      });
    },
  },
  // router: {
  //   scrollBehavior(to) {
  //     console.log(to);
  //     if (to.hash) {
  //       const el = document.getElementById(to.hash.substring(1));
  //       if (el) { // a valid id on page.
  //         setTimeout(() => {
  //           return window.scrollTo({ top: el.offsetTop - 30, behavior: 'smooth' });
  //         }, 500) // wait before scrolling, for initial loading delay
  //         return;
  //       }
  //     }
  //     return window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },

  // Google Analytics Configration
  googleAnalytics: {
    id: 'G-NSCV9YG71N',
  },

  //environment variables
  // publicRuntimeConfig: {
  //   ISHAAN: process.env.ISHAAN,
  // },
  env: {
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    ALGOLIA_PROJECT_ID: process.env.ALGOLIA_PROJECT_ID,
  },
};
