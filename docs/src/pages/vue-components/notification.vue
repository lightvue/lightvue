<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Basic" file="notification/NotificationDemo" overflow />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-card title="APIs" :responsive="false">
        <!-- <docs-all-api :api-data="$options.apiData" /> -->
      </docs-card>
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
// import NotificationAPI from 'lightvue/notification/NotificationAPI';

export default {
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
  // apiData: NotificationAPI,
};
</script>
