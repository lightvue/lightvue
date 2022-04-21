<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
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
          description: 'You can use the various Variants of notification by passing a variation classes. LightVue comes with some stunning designs for notification.There are different types of notifications are present in lightVue you can go through this page for more info. LightVue Notification is Both compatible with Vue <span>3.x</span> and Vue <span>2.x</span>.You have to render the notification component in your root file (App.vue)',
        },
        {
          title: 'Positions',
          file: 'notification/NotificationDemo_Position',
          description: 'You can change the positions of notification in the following way.',
        },
        {
          title: 'Options',
          file: 'notification/NotificationDemo_Option',
          description: 'You can use the sticky and multiple if.do not pass any value in duration in order to make it sticky.',
        },
        {
          title: 'Remove All',
          file: 'notification/NotificationDemo_RemoveAll',
          description: 'For removing all the notifications on the screen you can use the <span>removeAllGroups()</span> method.',
          // description: 'You can use the buttons with some basic use cases by simply passing classes or by passing props eg.for link button you can pass <span>--link-button</span> for disable button set the <span>disable</span> prop to true',
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
