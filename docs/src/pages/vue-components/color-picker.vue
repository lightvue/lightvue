<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="Demo" file="colorpicker/ColorpickerDemo" />
    <docs-card-vue title="Without input" file="colorpicker/ColorpickerDemo2" />
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
import ColorpickerAPI from 'lightvueDocs/example/colorpicker/ColorpickerAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' ColorPicker Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' ColorPicker Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Colorpicker can be used when a user needs to pick a color. Additionally, a customized color palette can also be passed as an array.',
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
  title: 'Colorpicker',
  description: `LvColorpicker can be used when a user needs to pick a color. Additionally, a customized color palette can also be passed as an array.`,
  packageName: 'colorpicker',
  componentName: 'LvColorpicker',
  status: COMPONENT_STATUS.UPDATED,
  apiData: ColorpickerAPI,
};
</script>
