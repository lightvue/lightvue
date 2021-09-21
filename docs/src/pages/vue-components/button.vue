<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" :badge="$options.badge">
    <button-best-demo />
    <docs-card-vue title="Basic Usage" file="button/ButtonDemo_Basic" />
    <docs-card-vue title="Rounded Buttons" file="button/ButtonDemo_Rounded" />
    <docs-card-vue title="Button Groups" file="button/ButtonDemo_Group" />
    <docs-card-vue title="Push Buttons" file="button/ButtonDemo_Raised" id="push" />
    <docs-card-vue title="Miscellaneous Usage" file="button/ButtonDemo_Misc" />
    <docs-card-vue title="Miscellaneous Usage" file="button/ButtonDemo_Shadow" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import ButtonBestDemo from 'lightvueDocs/example/button/ButtonBestDemo.vue';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout';
import DocsCardVue from '@/components/docs-card/DocsCardVue';
import DocsCard from '@/components/docs-card/DocsCard';
import GettingStarted from '@/components/docs-card/GettingStarted';
import DocsAllApi from '@/components/docs-card/DocsAllApi';
import ButtonAPI from 'lightvueDocs/example/button/ButtonAPI';

export default {
  head: {
    title: 'LightVue | Buttons ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'LightVue | Buttons',
      },
      {
        property: 'og:description',
        content: 'Button is an extension to standard button element with an option to add icons and your custom theming',
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
    ButtonBestDemo,
  },
  title: 'Button',
  description: `Button is an extension to standard button element with an option to add icons and your custom theming.`,
  packageName: 'button',
  componentName: 'LvButton',
  status: 'Stable',
  badge: 'lv--success',
  apiData: ButtonAPI,
};
</script>
