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
import NotificationAPI from 'lightvueDocs/example/notification/NotificationAPI';

export default {
  head: {
    title: ' Notification Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Notification Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Notification component of lightVue allow the user to show notifications on the page with any required content. ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Variants',
          file: 'notification/NotificationDemo',
          discription: 'Use the buttons with some basic and complex use cases by passing either classes or props eg. for link button, pass <span>--link-button</span> For disable button, set the <span>disable</span> prop to true.',
        },
        {
          title: 'Positions',
          file: 'notification/NotificationDemo_Position',
          discription: 'Use the buttons with some basic and complex use cases by passing either classes or props eg. for link button, pass <span>--link-button</span> For disable button, set the <span>disable</span> prop to true.',
          // discription: 'You can use the buttons with some basic use cases by simply passing classes or by passing props eg.for link button you can pass <span>--link-button</span> for disable button set the <span>disable</span> prop to true',
        },
        {
          title: 'Options',
          file: 'notification/NotificationDemo_Option',
          discription: 'Use the buttons with some basic and complex use cases by passing either classes or props eg. for link button, pass <span>--link-button</span> For disable button, set the <span>disable</span> prop to true.',
          // discription: 'You can use the buttons with some basic use cases by simply passing classes or by passing props eg.for link button you can pass <span>--link-button</span> for disable button set the <span>disable</span> prop to true',
        },
        {
          title: 'Remove All',
          file: 'notification/NotificationDemo_RemoveAll',
          discription: 'Use the buttons with some basic and complex use cases by passing either classes or props eg. for link button, pass <span>--link-button</span> For disable button, set the <span>disable</span> prop to true.',
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
  title: 'Notification',
  description: `Notification component of lightVue allow the user to show notifications on the page with any required content.`,
  packageName: 'notification',
  componentName: 'LvNotification',
  // status: 'Updated',
  apiData: NotificationAPI,
};
</script>
