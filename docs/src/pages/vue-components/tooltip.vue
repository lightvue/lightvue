<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="With Hover event" file="tooltip/TooltipHoverDemo" />
    <docs-card-vue title="With Focus event" file="tooltip/TooltipFocusDemo" />
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
import TooltipAPI from 'lightvueDocs/example/tooltip/TooltipAPI';

export default {
  head: {
    title: ' Tooltip Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Tooltip Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: ' ',
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
  title: 'Tooltip',
  description: `Tooltips can be used to show additional information about any element upon hovering over it.`,
  packageName: 'tooltip',
  componentName: 'LvTooltip',
  // status: 'Stable',
  apiData: TooltipAPI,
  apiData: {},
};
</script>
