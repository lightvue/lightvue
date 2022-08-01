import { createRouter, createWebHistory } from 'vue-router';
// import Sample from '../components/examples/Sample.vue';
import defaultScrollBehaviour from '@/app/router.scrollBehavior.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/vue-components',
    component: () => import('@/components/DocsLayout.vue'),
    children: [
      {
        path: 'input',
        component: () => import('@/pages/vue-components/input.vue'),
      },
      {
        path: 'button',
        component: () => import('@/pages/vue-components/button.vue'),
      },
      {
        path: 'checkbox',
        component: () => import('@/pages/vue-components/checkbox.vue'),
      },
      {
        path: 'checkbox-group',
        component: () => import('@/pages/vue-components/checkbox-group.vue'),
      },
      {
        path: 'drawer',
        component: () => import('@/pages/vue-components/drawer.vue'),
      },
      {
        path: 'radio',
        component: () => import('@/pages/vue-components/radio.vue'),
      },
      {
        path: 'radio-group',
        component: () => import('@/pages/vue-components/radio-group.vue'),
      },
      {
        path: 'card',
        component: () => import('@/pages/vue-components/card.vue'),
      },
      {
        path: 'checkbox-group',
        component: () => import('@/pages/vue-components/checkbox-group.vue'),
      },
      {
        path: 'color-picker',
        component: () => import('@/pages/vue-components/color-picker.vue'),
      },
      {
        path: 'dialog',
        component: () => import('@/pages/vue-components/dialog.vue'),
      },
      {
        path: 'dropdown',
        component: () => import('@/pages/vue-components/dropdown.vue'),
      },
      {
        path: 'glassmorphic-card',
        component: () => import('@/pages/vue-components/glassmorphic-card.vue'),
      },
      {
        path: 'loaders',
        component: () => import('@/pages/vue-components/loaders.vue'),
      },
      {
        path: 'notification',
        component: () => import('@/pages/vue-components/notification.vue'),
      },
      {
        path: 'number',
        component: () => import('@/pages/vue-components/number.vue'),
      },
      {
        path: 'overlay-panel',
        component: () => import('@/pages/vue-components/overlay-panel.vue'),
      },
      {
        path: 'page-loader',
        component: () => import('@/pages/vue-components/page-loader.vue'),
      },
      {
        path: 'progress-bar',
        component: () => import('@/pages/vue-components/progress-bar.vue'),
      },
      {
        path: 'progress-spinner',
        component: () => import('@/pages/vue-components/progress-spinner.vue'),
      },
      {
        path: 'rating',
        component: () => import('@/pages/vue-components/rating.vue'),
      },
      {
        path: 'ripple',
        component: () => import('@/pages/vue-components/ripple.vue'),
      },
      {
        path: 'shimmer',
        component: () => import('@/pages/vue-components/shimmer.vue'),
      },
      {
        path: 'slider',
        component: () => import('@/pages/vue-components/slider.vue'),
      },
      {
        path: 'collapsible',
        component: () => import('@/pages/vue-components/collapsible.vue'),
      },
      {
        path: 'badge',
        component: () => import('@/pages/vue-components/badge.vue'),
      },
      {
        path: 'textarea',
        component: () => import('@/pages/vue-components/textarea.vue'),
      },
      {
        path: 'text-editor',
        component: () => import('@/pages/vue-components/text-editor.vue'),
      },
      {
        path: 'toast',
        component: () => import('@/pages/vue-components/toast.vue'),
      },
      {
        path: 'toggle-switch',
        component: () => import('@/pages/vue-components/toggle-switch.vue'),
      },
      {
        path: 'tooltip',
        component: () => import('@/pages/vue-components/tooltip.vue'),
      },
    ],
  },
  {
    path: '/getting-started',
    component: () => import('@/components/DocsLayout.vue'),
    children: [
      {
        path: 'installation',
        component: () => import('@/pages/getting-started/installation.vue'),
      },
      {
        path: 'light-icons',
        component: () => import('@/pages/getting-started/light-icons.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: defaultScrollBehaviour,
});

export default router;
