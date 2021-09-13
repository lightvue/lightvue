<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" :badge="$options.badge">
    <docs-card-vue title="Basic" file="collapsible/AccordianDemo" overflow />
    <docs-card-vue title="Nested" file="collapsible/CollapsibleDemo" overflow />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-card title="APIs" :responsive="false">
        <docs-all-api :api-data="$options.apiData" />
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
import CollapsibleAPI from 'lightvueDocs/example/collapsible/CollapsibleAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Collapsible',
  description: `Collapsible component Easily toggle visibility of almost any content on your pages in a vertically and horizontally collapsing container`,
  packageName: 'collapsible',
  componentName: 'LvCollapsible',
  status: 'Under-development',
  badge: 'info',
  apiData: CollapsibleAPI,
};
</script>
