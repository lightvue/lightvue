import type { RouterConfig } from '@nuxt/schema';
import { appRoutes } from '@shared/routes.js';
import defaultScrollBehavior from '@/app/router.scrollBehavior.js';

export default {
  routes: _routes => appRoutes,
  scrollBehavior: defaultScrollBehavior,
  scrollBehaviorType: 'smooth',
} satisfies RouterConfig
