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
  head: {
    title: ' TextArea Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: 'TextArea Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Textarea component allows user to write long text/ paragraphs.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
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
