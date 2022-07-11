<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    </template>
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
    title: ' Collasible Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Collapsible Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Collapsible component Easily toggle visibility of almost any content on your pages in a vertically and horizontally collapsing container',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic',
          file: 'collapsible/AccordianDemo',
          description: 'You can hide or show the collapsible container by setting <span>show</span> prop true or false.You can also set the oriantation through <span>orientation</span> prop default value is vertical you can set it to horizontal. LightVue collapsible is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Nested',
          file: 'collapsible/CollapsibleDemo',
          description: 'You can also nest collapsibe inside collapsibe',
        },
      ],
    };
  },
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Collapsible',
  description: `Collapsible component easily toggles visibility of almost any content on your pages in a vertically and horizontally collapsing container`,
  packageName: 'collapsible',
  componentName: 'LvCollapsible',
  status: COMPONENT_STATUS.NEW,
  apiData: CollapsibleAPI,
};
</script>
