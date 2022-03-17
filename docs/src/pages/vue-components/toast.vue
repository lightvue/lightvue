<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :discription="demo.discription" :file="demo.file" :id="demo.id" />
    </template>
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
    return {
      demos: [
        {
          title: 'Variants',
          file: 'toast/ToastDemo',
          discription: 'You can use the various Variants of toast by passing a variation classes.LightVue comes with some stunning designs for Toast.There are different types of Toast are present in lightVue you can go through this page for more info.lightVue Toast is Both compatible with Vue 2.x and Vue 3.x.You have to render the toast component in your root file (App.vue).',
          // discription: 'You can use the buttons with some basic use cases by simply passing classes or by passing props eg.for link button you can pass <span>--link-button</span> for disable button set the <span>disable</span> prop to true',
        },
        {
          title: 'Positions',
          file: 'toast/ToastDemo_Position',
          discription: 'You can change the positions of notification in the following way.',
          // discription: 'You can use the buttons with some basic use cases by simply passing classes or by passing props eg.for link button you can pass <span>--link-button</span> for disable button set the <span>disable</span> prop to true',
        },
        {
          title: 'Options',
          file: 'toast/ToastDemo_Options',
          discription: 'You can use the sticky and multiple if.do not pass any value in duration in order to make it sticky.',
          // discription: 'You can use the buttons with some basic use cases by simply passing classes or by passing props eg.for link button you can pass <span>--link-button</span> for disable button set the <span>disable</span> prop to true',
        },
        {
          title: 'Remove All',
          file: 'toast/ToastDemo_RemoveAll',
          discription: 'For removing all the notifications on the screen you can use the <span>removeAllGroups()</span> method.',
          // discription: 'You can use the buttons with some basic use cases by simply passing classes or by passing props eg.for link button you can pass <span>--link-button</span> for disable button set the <span>disable</span> prop to true',
        },
      ],
    };
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
};
</script>
