const path = require('path');
import { resolve } from 'path';

export default defineNuxtConfig({
  typescript: {
    shim: true,
  },
  css: ['@/assets/styles/lightvue.scss'],
  alias: {
    '@': path.resolve(__dirname, '../docs/src'),
    'lightvue/tooltip': path.resolve(__dirname, '../core/directives/tooltip'),
    'lightvue/ripple': path.resolve(__dirname, '../core/directives/ripple'),
    'lightvue/utils': path.resolve(__dirname, '../core/utils'),
    'lightvueDocs/example': path.join(__dirname, '../examples'),
    'lightvue/mixins': path.resolve(__dirname, '../core/mixins'),
    lightvue: path.join(__dirname, '../core/components'),
    splitpanes: path.join(__dirname, '/src/components/splitpanes'),
    // '@@@': path.join(__dirname, '/..'), // this must never be used, resulting infinite loop.
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push(
        {
          name: 'Home',
          path: '/',
          file: resolve(__dirname, '../docs/src/pages/index.vue'),
        },
        {
          name: 'getting-started',
          path: '/getting-started',
          file: resolve(__dirname, '../docs/src/components/DocsLayout.vue'),
          children: [
            {
              name: 'installation',
              path: 'installation',
              file: resolve(__dirname, '../docs/src/pages/getting-started/installation.vue'),
            },
            {
              name: 'light-icons',
              path: 'light-icons',
              file: resolve(__dirname, '../docs/src/pages/getting-started/light-icons.vue'),
            },
          ],
        },
        {
          name: 'vue-components',
          path: '/vue-components',
          file: resolve(__dirname, '../docs/src/components/DocsLayout.vue'),
          children: [
            {
              name: 'input',
              path: 'input',
              file: resolve(__dirname, '../docs/src/pages/vue-components/input.vue'),
            },
            {
              name: 'inline-input',
              path: 'inline-input',
              file: resolve(__dirname, '../docs/src/pages/vue-components/inline-input.vue'),
            },
            {
              name: 'button',
              path: 'button',
              file: resolve(__dirname, '../docs/src/pages/vue-components/button.vue'),
            },
            {
              name: 'checkbox',
              path: 'checkbox',
              file: resolve(__dirname, '../docs/src/pages/vue-components/checkbox.vue'),
            },
            {
              name: 'checkbox-group',
              path: 'checkbox-group',
              file: resolve(__dirname, '../docs/src/pages/vue-components/checkbox-group.vue'),
            },
            {
              name: 'drawer',
              path: 'drawer',
              file: resolve(__dirname, '../docs/src/pages/vue-components/drawer.vue'),
            },
            {
              name: 'radio',
              path: 'radio',
              file: resolve(__dirname, '../docs/src/pages/vue-components/radio.vue'),
            },
            {
              name: 'radio-group',
              path: 'radio-group',
              file: resolve(__dirname, '../docs/src/pages/vue-components/radio-group.vue'),
            },
            {
              name: 'card',
              path: 'card',
              file: resolve(__dirname, '../docs/src/pages/vue-components/card.vue'),
            },
            {
              name: 'checkbox-group',
              path: 'checkbox-group',
              file: resolve(__dirname, '../docs/src/pages/vue-components/checkbox-group.vue'),
            },
            {
              name: 'color-picker',
              path: 'color-picker',
              file: resolve(__dirname, '../docs/src/pages/vue-components/color-picker.vue'),
            },
            {
              name: 'dialog',
              path: 'dialog',
              file: resolve(__dirname, '../docs/src/pages/vue-components/dialog.vue'),
            },
            {
              name: 'dropdown',
              path: 'dropdown',
              file: resolve(__dirname, '../docs/src/pages/vue-components/dropdown.vue'),
            },
            {
              name: 'glassmorphic-card',
              path: 'glassmorphic-card',
              file: resolve(__dirname, '../docs/src/pages/vue-components/glassmorphic-card.vue'),
            },
            {
              name: 'loaders',
              path: 'loaders',
              file: resolve(__dirname, '../docs/src/pages/vue-components/loaders.vue'),
            },
            {
              name: 'notification',
              path: 'notification',
              file: resolve(__dirname, '../docs/src/pages/vue-components/notification.vue'),
            },
            {
              name: 'number',
              path: 'number',
              file: resolve(__dirname, '../docs/src/pages/vue-components/number.vue'),
            },
            {
              name: 'overlay-panel',
              path: 'overlay-panel',
              file: resolve(__dirname, '../docs/src/pages/vue-components/overlay-panel.vue'),
            },
            {
              name: 'page-loader',
              path: 'page-loader',
              file: resolve(__dirname, '../docs/src/pages/vue-components/page-loader.vue'),
            },
            {
              name: 'progress-bar',
              path: 'progress-bar',
              file: resolve(__dirname, '../docs/src/pages/vue-components/progress-bar.vue'),
            },
            {
              name: 'progress-spinner',
              path: 'progress-spinner',
              file: resolve(__dirname, '../docs/src/pages/vue-components/progress-spinner.vue'),
            },
            {
              name: 'rating',
              path: 'rating',
              file: resolve(__dirname, '../docs/src/pages/vue-components/rating.vue'),
            },
            {
              name: 'ripple',
              path: 'ripple',
              file: resolve(__dirname, '../docs/src/pages/vue-components/ripple.vue'),
            },
            {
              name: 'shimmer',
              path: 'shimmer',
              file: resolve(__dirname, '../docs/src/pages/vue-components/shimmer.vue'),
            },
            {
              name: 'slider',
              path: 'slider',
              file: resolve(__dirname, '../docs/src/pages/vue-components/slider.vue'),
            },
            { name: 'collapsible', path: 'collapsible', file: resolve(__dirname, '../docs/src/pages/vue-components/collapsible.vue') },
            {
              name: 'badge',
              path: 'badge',
              file: resolve(__dirname, '../docs/src/pages/vue-components/badge.vue'),
            },
            {
              name: 'textarea',
              path: 'textarea',
              file: resolve(__dirname, '../docs/src/pages/vue-components/textarea.vue'),
            },
            {
              name: 'text-editor',
              path: 'text-editor',
              file: resolve(__dirname, '../docs/src/pages/vue-components/text-editor.vue'),
            },
            {
              name: 'toast',
              path: 'toast',
              file: resolve(__dirname, '../docs/src/pages/vue-components/toast.vue'),
            },
            {
              name: 'toggle-switch',
              path: 'toggle-switch',
              file: resolve(__dirname, '../docs/src/pages/vue-components/toggle-switch.vue'),
            },
            {
              name: 'tooltip',
              path: 'tooltip',
              file: resolve(__dirname, '../docs/src/pages/vue-components//tooltip.vue'),
            },
          ],
        }
      );
    },
  },
  pages: true,
});
