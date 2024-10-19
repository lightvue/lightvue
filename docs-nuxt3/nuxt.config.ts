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
        splitpanes: path.join(__dirname, '/../docs-shared/components/splitpanes'),
        '@shared': path.join(__dirname, '/../docs-shared'),
        // '@@@': path.join(__dirname, '/..'), // this must never be used, resulting infinite loop.
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern", "legacy"
          // additionalData: '@import "@/assets/styles/lightvue.scss";',
          // silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    build: {
      assetsDir: '_assets/',
    },
  },

  devServer: {
    port: 4000,
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: pkg.title,
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/algoliasearch@4.24.0/dist/algoliasearch-lite.umd.js',
          integrity: 'sha256-b2n6oSgG4C1stMT/yc/ChGszs9EY/Mhs6oltEjQbFCQ=',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/instantsearch.js@4.74.2/dist/instantsearch.production.min.js',
          integrity: 'sha256-LfyQz2E24221PkRbKoakchcpdlZOA4R1Ugi6NnhyGF0=',
          crossorigin: 'anonymous',
        },
      ],
    },
  },

  modules: ['@nuxtjs/seo'],
  site: {
    url: 'https://lightvue.org/',
    name: 'LightVue',
    description: 'The Emerging UI Component library for Vue 2.x & Vue 3.x',
    language: 'en',
    titleSeparator: '|',
    titleTemplate: '%s',
  },
  seoExperiments: {
    enabled: false,
  },
});
