<template>
  <div id="app">
    <docs-layout>
      <template #app-search>
        <app-search v-if="$lightvue && $lightvue.version !== 3" />
      </template>
    </docs-layout>
    <LvToast />
    <LvNotification />
  </div>
</template>

<script>
import DocsLayout from '@/components/DocsLayout.vue';
import AppSearch from '@/components/AppSearch';

export default {
  scrollToTop: true,
  components: {
    DocsLayout,
    AppSearch,
  },
};
</script>

<style lang="scss">
@import './overwrite.scss';
@import './examples.scss';
@import '@/assets/styles/docsGlobal.scss';
</style>
