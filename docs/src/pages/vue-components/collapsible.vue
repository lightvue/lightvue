<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="Basic" file="collapsible/AccordianDemo" overflow />
    <docs-card-vue title="Nested" file="collapsible/CollapsibleDemo" overflow />
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
import CollapsibleAPI from 'lightvueDocs/example/collapsible/CollapsibleAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Collasible Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Collapsible Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Collapsible component Easily toggle visibility of almost any content on your pages in a vertically and horizontally collapsing container',
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
  title: 'Collapsible',
  description: `Collapsible component Easily toggle visibility of almost any content on your pages in a vertically and horizontally collapsing container`,
  packageName: 'collapsible',
  componentName: 'LvCollapsible',
  status: COMPONENT_STATUS.NEW,
  apiData: CollapsibleAPI,
};
</script>
