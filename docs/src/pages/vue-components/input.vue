<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <input-best-demo />
    <docs-card-vue title="Basic" file="input/InputDemo_Basic" />
    <docs-card-vue title="Rounded" file="input/InputDemo_Rounded" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout';
import InputBestDemo from 'lightvueDocs/example/input/InputBestDemo.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue';
import DocsCard from '@/components/docs-card/DocsCard';
import GettingStarted from '@/components/docs-card/GettingStarted';
import DocsAllApi from '@/components/docs-card/DocsAllApi';
import InputAPI from 'lightvueDocs/example/input/InputAPI';

export default {
  head: {
    title: ' Input Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' Input Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Light-input provides with a variety of input fields with various available customizations which helps it to fulfill the need of almost every web application/project',
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
    InputBestDemo,
  },
  title: 'Light-input',
  description: `Light-input provides with a variety of input fields with various available customizations which helps it to fulfill the need of almost every web application/project.`,
  packageName: 'input',
  componentName: 'LvInput',
  // status: 'Rc',
  apiData: InputAPI,
};
</script>
