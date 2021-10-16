<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <TextEditorBestDemo />
    <docs-card-vue title="Demo" file="text-editor/TextEditorDemo" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import TextEditorBestDemo from 'lightvueDocs/example/text-editor/TextEditorBestDemo.vue';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import TextEditorAPI from 'lightvueDocs/example/text-editor/TextEditorAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  components: {
    TextEditorBestDemo,
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Text Editor',
  description: `LvTextEditor is WYSIWYG editor that lets users format content, align content, embed links & more.`,
  packageName: 'texteditor',
  componentName: 'LvTextEditor',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: TextEditorAPI,
};
</script>
