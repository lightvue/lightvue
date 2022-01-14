<template>
  <div>
    <app-header @toggle-drawer="toggleDrawer()">
      <template #app-search>
        <slot name="app-search"> </slot>
      </template>
    </app-header>
    <div class="sidemenu__backdrop" v-if="showDrawer" @click="toggleDrawer()"></div>
    <app-navigation-drawer :show-drawer="showDrawer" @toggle-drawer="toggleDrawer()" />
    <div class="page-wrap">
      <div class="page-content">
        <slot name="page-content">
          <component :is="$lightvue && $lightvue.version === 3 ? 'router-view' : 'nuxt-child'" />
        </slot>
      </div>
      <app-footer />
    </div>
  </div>
</template>

<script>
import 'light-icons/dist/light-icon.css';
import AppHeader from '@/components/AppHeader.vue';
import AppNavigationDrawer from '@/components/AppNavigationDrawer.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  scrollToTop: true,
  components: {
    AppHeader,
    AppNavigationDrawer,
    AppFooter,
  },
  data() {
    return {
      showDrawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.showDrawer = !this.showDrawer;
    },
  },
};
</script>
