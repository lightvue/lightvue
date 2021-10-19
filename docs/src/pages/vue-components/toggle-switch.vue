<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="Demo" file="input-toggle/ToggleSwitchDemo_Basic" />
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
import ToggleSwitchAPI from 'lightvueDocs/example/input-toggle/ToggleSwitchAPI';

export default {
  head: {
    title: ' ToggleSwitch Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' ToggleSwitch Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'ToggleSwitch is used to select a boolean value.',
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
  title: 'Toggle Switch',
  description: `ToggleSwitch is used to select a boolean value.`,
  packageName: 'toggle-switch',
  componentName: 'LvToggleSwitch',
  // status: 'Stable',
  apiData: ToggleSwitchAPI,
};
</script>
