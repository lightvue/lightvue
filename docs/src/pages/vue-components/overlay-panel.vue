<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="Basic" file="overlay-panel/OverlayPanelDemo_Basic" overflow />
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
import OverlayPanelAPI from 'lightvueDocs/example/overlay-panel/OverlayPanelAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' OverlayPanel Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' OverlayPanel Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'OverlayPanel is a container component positioned as connected to its target.',
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

  title: 'Overlay Panel',
  description: `OverlayPanel is a container component positioned as connected to its target.`,
  packageName: 'overlay-panel',
  componentName: 'LvOverlayPanel',
  status: COMPONENT_STATUS.BETA,
  apiData: OverlayPanelAPI,
};
</script>
