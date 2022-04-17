<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" hasDocs :demoList="$options.demoList">
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :discription="demo.discription" :file="demo.file" :id="demo.id" />
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
import ToastAPI from 'lightvueDocs/example/toast/ToastAPI';

export default {
  head: {
    title: ' Toast Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Toast Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Toast allows to show toast messages with the page or after an action is performed. ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {};
  },
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Toast',
  description: `Toast allows to show toast messages with the page or after an action is performed.`,
  packageName: 'Toast',
  componentName: 'LvToast',
  // status: 'Updated',
  apiData: ToastAPI,
  demoList: [
    {
      id: 'variants',
      title: 'Variants',
      file: 'toast/ToastDemo',
      discription: 'You can use the various Variants of toast by passing a variation classes.LightVue comes with some stunning designs for Toast.There are different types of Toast are present in lightVue you can go through this page for more info.LightVue Toast is Both compatible with Vue 2.x and Vue 3.x.You have to render the toast component in your root file (App.vue).',
    },
    {
      id: 'positions',
      title: 'Positions',
      file: 'toast/ToastDemo_Position',
      discription: 'You can change the positions of notification in the following way.',
    },
    {
      id: 'options',
      title: 'Options',
      file: 'toast/ToastDemo_Options',
      discription: 'You can use the sticky and multiple if.do not pass any value in duration in order to make it sticky.',
    },
    {
      id: 'remove-all',
      title: 'Remove all',
      file: 'toast/ToastDemo_RemoveAll',
      discription: 'For removing all the notifications on the screen you can use the <span>removeAllGroups()</span> method.',
    },
  ],
};
</script>
