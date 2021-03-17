<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Dynamic" file="progressbar/ProgressBarDemo_Dynamic" />
    <docs-card-vue title="Static" file="progressbar/ProgressBarDemo_Static" />
    <docs-card-vue title="Indeterminate" file="progressbar/ProgressBarDemo_Indeterminate" />
    <docs-card-vue title="Colored" file="progressbar/ProgressBarDemo_Colored" />
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
// import ProgressBarAPI from 'lightvue/progressbar/ProgressBarAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Progress Bar',
  description: `Progress Bar component can be used as a process status indicator for a time-consuming process.`,
  packageName: 'progressbar',
  componentName: 'lv-progressbar',
  // apiData: ProgressBarAPI,
};
</script>
