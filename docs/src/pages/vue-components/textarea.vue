<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <TextareaBestDemo />
    <docs-card-vue title="Basic" file="textarea/TextareaDemo__Basic" overflow />
    <docs-card-vue title="Customised" file="textarea/TextareaDemo__Customised" overflow />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import TextareaBestDemo from 'lightvueDocs/example/textarea/TextareaBestDemo';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import TextareaAPI from 'lightvueDocs/example/textarea/TextareaAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
    TextareaBestDemo,
  },
  title: 'Textarea',
  description: `Textarea component allows user to write long text/ paragraphs.`,
  packageName: 'textarea',
  componentName: 'LVTextarea',
  // status: 'Stable',
  apiData: TextareaAPI,
};
</script>
