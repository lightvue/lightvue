<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="Modifying behaviour" file="dropdown/DropdownDemo_Basic" overflow />
    <docs-card-vue title="Modifying styling" file="dropdown/DropdownDemo_Styled" overflow />
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
import DropdownAPI from 'lightvueDocs/example/dropdown/DropdownAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Dropdown Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' Dropdown Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Dropdown component allows user to choose an option from the provided options.',
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
  title: 'Dropdown',
  description: `Dropdown component allows user to choose an option from the provided options.`,
  packageName: 'dropdown',
  componentName: 'LvDropdown',
  status: COMPONENT_STATUS.UPDATED,
  apiData: DropdownAPI,
};
</script>
