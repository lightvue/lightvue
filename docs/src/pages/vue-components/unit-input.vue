<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :demoList="$options.demoList" hasDocs>
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout';
import DocsCardVue from '@/components/docs-card/DocsCardVue';
import DocsCard from '@/components/docs-card/DocsCard';
import GettingStarted from '@/components/docs-card/GettingStarted';
import DocsAllApi from '@/components/docs-card/DocsAllApi';
import UnitInputApi from 'lightvueDocs/example/unit-input/UnitInputApi';

const pageDescription = 'Button is an extension to standard button element with an option to add icons and your custom theming.';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  head: {
    title: ' Buttons Documentation | LightVue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Buttons Documentation | LightVue',
      },
      {
        property: 'og:description',
        content: pageDescription,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  title: 'Unit Input',
  description: pageDescription,
  packageName: 'ubit-input',
  componentName: 'LvUnitInput',
  apiData: UnitInputApi,
  demoList: [
    {
      id: 'basic-usage',
      title: 'Basic usage',
      file: 'unit-input/UnitInputDemo',
      description: 'UnitInput is a controller used by Lightvue to get the units entered by the user. This tool is helpful for ensuring that users enter the correct units when working with various tasks',
    },
  ],
};
</script>
