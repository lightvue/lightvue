<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Basic" file="examples/number/Number_BasicDemo" overflow />
    <docs-card-vue title="Rounded" file="examples/number/Number_RoundedDemo" overflow />
    <docs-card-vue title="Customise Icons" file="examples/number/Number_IconDemo" overflow />

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
import NumberAPI from '@/collections/number/NumberAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Number',
  description: `Input Number component allows user to Take Number as a input.`,
  packageName: 'number',
  componentName: 'LvNumber',
  apiData: NumberAPI,
};
</script>
