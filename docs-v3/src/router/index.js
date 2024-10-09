import { createRouter, createWebHistory } from 'vue-router';
// import Sample from '../components/examples/Sample.vue';
import defaultScrollBehavior from '@/app/router.scrollBehavior.js';
import { appRoutes } from '@shared/routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: appRoutes,
  scrollBehavior: defaultScrollBehavior,
});

export default router;
