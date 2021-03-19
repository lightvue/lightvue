<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Toast" file="toast/ToastDemo" overflow />
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
  apiData: ToastAPI,
};
</script>
