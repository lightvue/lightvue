<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="Basic" file="radio-group/RadioGroupDemo_Basic" />
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
import CheckboxAPI from 'lightvueDocs/example/checkbox/CheckboxAPI';

export default {
  head: {
    title: ' RadioGroup Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' RadioGroup Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'RadioGroup component can be used when user needs to select or deselect options from a given array of options.',
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
  title: 'Radio Group',
  description: `LvRadioGroup component can be used when user needs to select or deselect options from a given array of options.`,
  packageName: 'radio-group',
  componentName: 'LvRadioGroup',
  // status: 'Stable',
  apiData: CheckboxAPI,
};
</script>
