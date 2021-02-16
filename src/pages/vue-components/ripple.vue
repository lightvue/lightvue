<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Basic usage" file="examples/ripple/RippleBasicDemo" />
    <docs-card-vue title="Modifying color" file="examples/ripple/RippleColorDemo" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <!-- <docs-all-api :api-data="$options.apiData" /> -->
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import RippleAPI from '@/collections/ripple/RippleAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Ripple effect',
  description: `Add a material ripple effect on click, to any DOM element/Vue component.`,
  packageName: 'ripple',
  componentName: 'Ripple',
  apiData: RippleAPI,
};
</script>
