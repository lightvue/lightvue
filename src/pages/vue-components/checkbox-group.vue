<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Basic" file="examples/checkbox-group/CheckboxGroupDemo_Basic" />
    <!-- <docs-card-vue title="Basic" file="examples/checkbox/CheckboxDemo" /> -->
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
import CheckboxAPI from 'lightvue/checkbox/CheckboxAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Checkbox',
  description: `LvCheckbox component can be used in projects where a way is required for user to select or deselect an option.`,
  packageName: 'CheckBox',
  componentName: 'LvCheckboxGroup',
  apiData: CheckboxAPI,
};
</script>
