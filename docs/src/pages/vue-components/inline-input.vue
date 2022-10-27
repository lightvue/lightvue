<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <InlineInputBestDemo />
    <!-- <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    </template> -->
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <!-- <docs-all-api :api-data="$options.apiData" /> -->
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout';
import InlineInputBestDemo from 'lightvueDocs/example/inline-input/InlineInputBestDemo.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue';
import DocsCard from '@/components/docs-card/DocsCard';
import GettingStarted from '@/components/docs-card/GettingStarted';
import DocsAllApi from '@/components/docs-card/DocsAllApi';
// import InputAPI from 'lightvueDocs/example/input/InputAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Inline-Input Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' Inline-Input Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Lv-Inline-input provides with a variety of input fields with various available customizations which helps it to fulfil the need of almost every web application/project',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [],
    };
  },
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
    InlineInputBestDemo,
  },
  title: 'Inline Input',
  description: ``,
  packageName: 'inline-input',
  componentName: 'LvInlineInput',
  status: COMPONENT_STATUS.NEW,
  // apiData: InlineInputAPI,
};
</script>
