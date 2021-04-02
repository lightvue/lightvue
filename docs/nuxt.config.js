const path = require('path');
require('dotenv').config();

const pkg = require('../package.json');

// console.log(resolve(__dirname));
// console.log(resolve(__dirname, '/../core/components'));
// console.log(resolve(__dirname, './../core/components'));
// console.log(join(__dirname));
// console.log(path.join(__dirname, '/../core/components'));
// console.log(path.join(__dirname, './../core/components'));
// console.log(path.join(__dirname, '/..'));

export default {
  srcDir: 'src/',
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: pkg.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: pkg.title },
      { property: 'og:image', content: 'https://lightvue.org/og-img.png' },
      {
        property: 'og:site_name',
        content: pkg.title,
      },
      {
        property: 'og:description',
        content: pkg.description,
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description,
      },
      {
        name: 'google-site-verification',
        content: 'QMiXd8kXdh7FF6dlfvLlF-PO4OJKHmtmINPfpwuigpU',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // link: [{ rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    // link: [{ href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
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
    // '@nuxtjs/pwa',
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
    publicPath: '/_assets/',
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
  alias: {
    'lightvue/tooltip': path.join(__dirname, '/../core/directives/tooltip'),
    'lightvue/ripple': path.join(__dirname, '/../core/directives/ripple'),
    'lightvue/utils': path.join(__dirname, '/../core/utils'),
    'lightvue/mixins': path.join(__dirname, '/../core/mixins'),
    'lightvueDocs/example': path.join(__dirname, '/../examples'),
    lightvue: path.join(__dirname, '/../core/components'),
    //   // '@@@': path.join(__dirname, '/..'), // this must never be used, resulting infinite loop.
  },
};
