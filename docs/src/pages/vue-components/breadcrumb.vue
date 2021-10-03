<template>
  <docs-page-layout
    :title="$options.title"
    :description="$options.description"
  >
    <docs-card-vue
      title="Breadcrumb demo"
      file="breadcrumb/BreadcrumbDemo"
    />
    <template #api>
      <getting-started
        :package-name="$options.packageName"
        :component-name="$options.componentName"
      />
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
import BreadcrumbAPI from 'lightvueDocs/example/breadcrumb/BreadcrumbAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Breadcrumb',
  description: `Breadcrumb is a basic component which essentially provides help in the navigation of web pages.`,
  packageName: 'breadcrumb',
  componentName: 'LvBreadcrumb',
  apiData: BreadcrumbAPI,
};
</script>
