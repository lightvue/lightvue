<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" :badge="$options.badge">
    <docs-card-vue title="Modifying behaviour" file="dropdown/DropdownDemo_Basic" overflow />
    <docs-card-vue title="Modifying styling" file="dropdown/DropdownDemo_Styled" overflow />
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
import DropdownAPI from 'lightvueDocs/example/dropdown/DropdownAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Dropdown',
  description: `Dropdown component allows user to choose an option from the provided options.`,
  packageName: 'dropdown',
  componentName: 'LvDropdown',
  status: 'Updated',
  badge: 'lv--secondary',
  apiData: DropdownAPI,
};
</script>
