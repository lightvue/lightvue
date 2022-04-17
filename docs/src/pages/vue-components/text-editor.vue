<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" hasPlayground hasDocs :demoList="$options.demoList">
    <TextEditorBestDemo />
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :discription="demo.discription" :file="demo.file" :id="demo.id" />
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
  head: {
    title: ' TextEditor Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' TextEditor Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'TextEditor is WYSISYG editor that lets users format content, align content, embed links & more.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
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
  demoList: [
    {
      id: 'basic usage',
      title: 'Basic usage',
      file: 'text-editor/TextEditorDemo',
      discription: 'You can use the <span>LvTextEditor</span> as follows:',
    },
  ],
};
</script>
