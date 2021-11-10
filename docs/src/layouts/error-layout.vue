<template>
  <div id="app">
    <docs-layout>
      <template #page-content>
        <nuxt />
      </template>
    </docs-layout>
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
