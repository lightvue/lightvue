<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :demoList="$options.demoList" hasDocs :status="$options.status">
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
import BoxModelApi from 'lightvueDocs/example/box-model/BoxModelApi';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';
const pageDescription = 'The LvBoxModel is an spectacular controller that introduced by lightvue to  set the padding or margin of an HTML element. This makes it easier for developers to visualize  consistent and responsive layouts without having to worry about manually setting these values.';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  head: {
    title: ' BoxModel Documentation | LightVue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' BoxModel Documentation | LightVue',
      },
      {
        property: 'og:description',
        content: pageDescription,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  title: 'Box Model',
  description: pageDescription,
  packageName: 'box-model',
  componentName: 'LvBoxModel',
  status: COMPONENT_STATUS.NEW,
  apiData: BoxModelApi,
  demoList: [
    {
      id: 'basic-usage',
      title: 'Basic usage',
      file: 'box-model/BoxModelDemo',
      description: "LvBoxModel's <span>v-model</span> is really helpful because it returns a string with all four side values. This makes it easier to work with the values and helps make sure that you don't miss anything.",
    },
  ],
};
</script>
