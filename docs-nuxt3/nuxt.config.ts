// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import pkg from './package.json';
import { createResolver } from '@nuxt/kit';

export default defineNuxtConfig({
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
});
