import type { RouterConfig } from '@nuxt/schema';
import { appRoutes } from '@shared/routes';

export default {
  routes: _routes => appRoutes,
} satisfies RouterConfig
