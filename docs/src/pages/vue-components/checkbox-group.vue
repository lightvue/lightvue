<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" :badge="$options.badge">
    <docs-card-vue title="Basic" file="checkbox-group/CheckboxGroupDemo_Basic" />
    <!-- <docs-card-vue title="Basic" file="checkbox/CheckboxDemo" /> -->
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
import CheckboxAPI from 'lightvueDocs/example/checkbox/CheckboxAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Checkbox Group',
  description: `LvCheckboxGroup component can be used when user needs to select or deselect options from a given array of options.`,
  packageName: 'checkbox-group',
  componentName: 'LvCheckboxGroup',
  status: 'Stable',
  badge: 'info',
  apiData: CheckboxAPI,
};
</script>
