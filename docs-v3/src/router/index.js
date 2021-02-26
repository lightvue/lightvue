import { createRouter, createWebHistory } from 'vue-router';
// import Sample from '../components/examples/Sample.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/vue-components',
    component: () => import('../components/Layout/DocsLayout.vue'),
    children: [
      {
        path: 'input',
        component: () => import('@/pages/vue-components/input.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: to => {
    console.log(to);
    if (to.hash) {
      const el = document.getElementById(to.hash.substring(1));
      if (el) {
        // a valid id on page.
        setTimeout(() => {
          return window.scrollTo({ top: el.offsetTop - 30, behavior: 'smooth' });
        }, 500); // wait before scrolling, for initial loading delay
        return;
      }
    }
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});

export default router;
