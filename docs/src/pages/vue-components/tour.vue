<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" hasDocs>
    <!-- <TourDemo /> -->
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <!-- <docs-all-api :api-data="$options.apiData" /> -->
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout';
import DocsCardVue from '@/components/docs-card/DocsCardVue';
import DocsCard from '@/components/docs-card/DocsCard';
import GettingStarted from '@/components/docs-card/GettingStarted';
import DocsAllApi from '@/components/docs-card/DocsAllApi';
import PopOverAPI from 'lightvueDocs/example/popover/PopOverAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';
import TourDemo from 'lightvueDocs/example/tour/TourDemo.vue';

export default {
  head: {
    title: 'Tour | LightVue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'LightVue | Dialog',
      },
      {
        property: 'og:description',
        content: 'LightVue Dialog helps the user to have modal and additional dialog box with their data.',
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
    TourDemo,
  },
  title: 'Tour',
  description: 'The LvTour provides a quick and easy way to guide your users through your application.',
  packageName: 'tour',
  componentName: 'LvTour',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  //   apiData: ,
  demoList: [
    {
      id: 'tour',
      title: 'Basic Demo',
      file: 'tour/TourDemo',
      description: '',
    },
    {
      id: 'tour demo 2',
      title: 'Demo 2',
      file: 'tour/TourDemo2',
      description: '',
    },
    {
      id: 'tour demo 3',
      title: 'Demo 3',
      file: 'tour/TourDemo3',
      description: '',
    },
  ],
};
</script>
