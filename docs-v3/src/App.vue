<template>
  <div>
    <router-view />
    <LvToast position="top" />
    <LvToast position="center" />
    <LvToast position="bottom" />
    <LvNotification />
    <LvNotification position="top-left" />
    <LvNotification position="bottom-left" />
    <LvNotification position="bottom-right" />
  </div>
</template>

<style>
@import url('https://unpkg.com/light-icons/dist/light-icon.css');
</style>

<script>
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
