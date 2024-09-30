import type { RouterConfig } from '@nuxt/schema'

export default {
    // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
    routes: (_routes) => [
        {
            name: 'Home',
            path: '/',
            component: () => import('../docs/src/pages/index.vue')
        }
    ],
} satisfies RouterConfig
