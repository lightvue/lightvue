<template>
  <div id="app">
    <docs-layout />
    <LvToast position="top" />
    <LvToast position="center" />
    <LvToast position="bottom" />
    <LvNotification />
    <LvNotification position="top-left" />
    <LvNotification position="bottom-left" />
    <LvNotification position="bottom-right" />
  </div>
</template>

<script>
import DocsLayout from '@/components/DocsLayout.vue';

export default {
  scrollToTop: true,
  components: {
    DocsLayout,
  },
};
</script>

<style lang="scss">
@import './overwrite.scss';
@import './examples.scss';
@import '@/assets/styles/docsGlobal.scss';
</style>
