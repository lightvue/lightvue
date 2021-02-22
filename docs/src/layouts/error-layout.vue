<template>
  <div id="app">
    <app-header @toggle-drawer="toggleDrawer()" />
    <div class="sidemenu__backdrop" v-if="showDrawer" @click="toggleDrawer()"></div>
    <app-navigation-drawer :show-drawer="showDrawer" @toggle-drawer="toggleDrawer()" />
    <div class="page-wrap">
      <div class="page-content">
        <nuxt />
      </div>
      <app-footer />
    </div>
  </div>
</template>

<script>
import 'light-icons/dist/light-icon.css';
import AppHeader from '@/components/AppHeader.vue';
// import SideMenu from "@/components/SideMenu.vue";
import AppNavigationDrawer from '@/components/AppNavigationDrawer.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  scrollToTop: true,
  components: {
    AppHeader,
    // SideMenu,
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
