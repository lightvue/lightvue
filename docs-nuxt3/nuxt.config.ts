// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import pkg from './package.json';

export default defineNuxtConfig({
  ssr: true,
  // srcDir: 'src/',
  vite: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/../docs/src'),
        'lightvue/tooltip': path.join(__dirname, '/../core/directives/tooltip'),
        'lightvue/ripple': path.join(__dirname, '/../core/directives/ripple'),
        'lightvue/utils': path.join(__dirname, '/../core/utils'),
        'lightvueDocs/example': path.join(__dirname, '/../examples'),
        'lightvue/mixins': path.join(__dirname, '/../core/mixins'),
        lightvue: path.join(__dirname, '/../core/components'),
        splitpanes: path.join(__dirname, '/app/components/splitpanes'),
        // '@@@': path.join(__dirname, '/..'), // this must never be used, resulting infinite loop.
      },
    },
  },
  runtimeConfig: {
    public: {
      // siteUrl: 'https://lightvue.org/',
      // siteName: 'LightVue | Emerging Collection of well Crafted UI Components',
      // siteDescription: 'The Emerging UI Component library for Vue 2.x & Vue 3.x',
      // language: 'en',
      // titleSeparator: '|',
      // titleTemplate: '%s %separator %siteName',
    },
    ogImage: {
      host: 'https://rishikesh.app/',
    },
  },

  devServer: {
    port: 4001,
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: pkg.title,
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  modules: ['@nuxtjs/seo', '@nuxtjs/algolia'],
  site: {
    url: 'https://lightvue.org/',
    name: 'Emerging Collection of well Crafted UI Components | LightVue',
    description: 'The Emerging UI Component library for Vue 2.x & Vue 3.x',
    language: 'en',
    titleSeparator: '|',
    titleTemplate: '%s %separator %siteName',
  },
  seoExperiments: {
    enabled: false,
  },
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    instantSearch: {
      theme: 'algolia',
    },
  },
});
