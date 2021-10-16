<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="Dynamic" file="progressbar/ProgressBarDemo_Dynamic" />
    <docs-card-vue title="Static" file="progressbar/ProgressBarDemo_Static" />
    <docs-card-vue title="Indeterminate" file="progressbar/ProgressBarDemo_Indeterminate" />
    <docs-card-vue title="Colored" file="progressbar/ProgressBarDemo_Colored" />
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
import ProgressBarAPI from 'lightvueDocs/example/progressbar/ProgressBarAPI';

export default {
  head: {
    title: 'LightVue | ProgressBarDocs ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'LightVue | ProgressBarDocs',
      },
      {
        property: 'og:description',
        content: 'Progress Bar component can be used as a process status indicator for a time-consuming process. ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
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
  // status: 'Stable',
  apiData: ProgressBarAPI,
};
</script>
