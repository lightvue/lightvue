<template>
  <div>
    <router-view />
    <LvToast />
    <LvNotification />
  </div>
</template>

<script>
import 'light-icons/dist/light-icon.css';
import '@/assets/styles/lightvue.scss';

export default {
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

<style lang="scss">
@import '@/assets/styles/docsGlobal.scss';
</style>
