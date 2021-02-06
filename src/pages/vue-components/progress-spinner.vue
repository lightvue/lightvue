<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Size" file="examples/progressspinner/ProgressSpinnerSizeDemo" />
    <docs-card-vue title="Color" file="examples/progressspinner/ProgressSpinnerColorDemo" />
    <docs-card-vue title="Stroke-width" file="examples/progressspinner/ProgressSpinnerStrokeDemo" />
    <docs-card-vue title="Animation-duration" file="examples/progressspinner/ProgressSpinnerDurationDemo" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import ProgressSpinnerAPI from '@/collections/progressspinner/ProgressSpinnerAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Progress Spinners',
  description: `Progress spinner components can be used as a loading animations or space-fillers while waiting for the actual content to load.`,
  packageName: 'progressSpinner',
  componentName: 'lv-progressspinner',
  apiData: ProgressSpinnerAPI,
};
</script>
