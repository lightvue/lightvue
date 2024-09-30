// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import pkg from './package.json';

export default defineNuxtConfig({
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'docs/src'),
        'lightvue/tooltip': path.resolve(__dirname, 'core/directives/tooltip'),
        'lightvue/ripple': path.resolve(__dirname, 'core/directives/ripple'),
        'lightvue/utils': path.resolve(__dirname, 'core/utils'),
        'lightvueDocs/example': path.resolve(__dirname, 'examples'),
        'lightvue/mixins': path.resolve(__dirname, 'core/mixins'),
        lightvue: path.resolve(__dirname, 'core/components'),
        splitpanes: path.resolve(__dirname, 'src/components/splitpanes'),
      },
    },
  },
  devServer: {
    port: 4001,
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: pkg.title, // Dynamically set title from package.json
    },
  },
  pages: false,
});
