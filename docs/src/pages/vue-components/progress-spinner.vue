<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="Size" file="progressspinner/ProgressSpinnerSizeDemo" />
    <docs-card-vue title="Color" file="progressspinner/ProgressSpinnerColorDemo" />
    <docs-card-vue title="Stroke-width" file="progressspinner/ProgressSpinnerStrokeDemo" />
    <docs-card-vue title="Animation-duration" file="progressspinner/ProgressSpinnerDurationDemo" />
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
import ProgressSpinnerAPI from 'lightvueDocs/example/progressspinner/ProgressSpinnerAPI';

export default {
  head: {
    title: ' ProgressSpinner Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' ProgressSpinner Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Progress spinner components can be used as a loading animations or space-fillers while waiting for the actual content to load. ',
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
  title: 'Progress Spinners',
  description: `Progress spinner components can be used as a loading animations or space-fillers while waiting for the actual content to load.`,
  packageName: 'progressSpinner',
  componentName: 'lv-progressspinner',
  // status: 'Stable',
  apiData: ProgressSpinnerAPI,
};
</script>
