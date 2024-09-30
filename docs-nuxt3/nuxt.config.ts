// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import pkg from './package.json';

export default defineNuxtConfig({
  // ssr: true,
  // srcDir: 'src/',
  vite: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'docs/src'),
        'lightvue/tooltip': path.join(__dirname, 'core/directives/tooltip'),
        'lightvue/ripple': path.join(__dirname, 'core/directives/ripple'),
        'lightvue/utils': path.join(__dirname, 'core/utils'),
        'lightvueDocs/example': path.join(__dirname, 'examples'),
        'lightvue/mixins': path.join(__dirname, 'core/mixins'),
        lightvue: path.join(__dirname, 'core/components'),
        splitpanes: path.join(__dirname, 'src/components/splitpanes'),
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
  hooks: {
    'pages:extend'(pages) {
      pages.push(
        {
          name: 'Home',
          path: '/',
          file: path.join(__dirname, '../docs/src/pages/index.vue'),
        },
        {
          name: 'Getting started',
          path: '/getting-started/installation',
          file: path.join(__dirname, '../docs/src/pages/getting-started/installation.vue'),
        }
        // {
        //   path: '/getting-started',
        //   file: path.join(__dirname, '../docs/src/components/DocsLayout.vue'),
        //   children: [
        //     {
        //       path: 'installation',
        //       file: path.join(__dirname, '../docs/src/pages/getting-started/installation.vue'),
        //     },
        //     {
        //       path: 'light-icons',
        //       file: path.join(__dirname, '../docs/src/pages/getting-started/light-icons.vue'),
        //     },
        //   ],
        // }
      );
    },
  },
  // router: {
  //   options: {
  //     extendRoutes(routes, resolve) {
  //       routes.push({
  //         name: 'home',
  //         path: '/',
  //         component: resolve(__dirname, 'docs/src/pages/index.vue'),
  //       });
  //       routes.push({
  //         path: '/getting-started',
  //         component: resolve(__dirname, 'docs/src/components/DocsLayout.vue'),
  //         children: [
  //           {
  //             path: 'installation',
  //             component: resolve(__dirname, 'docs/src/pages/getting-started/installation.vue'),
  //           },
  //           {
  //             path: 'light-icons',
  //             component: resolve(__dirname, 'docs/src/pages/getting-started/light-icons.vue'),
  //           },
  //         ],
  //       });
  //     },
  //   },
  // },
});
