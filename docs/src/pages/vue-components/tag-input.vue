<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :demoList="$options.demoList" hasPlayground hasDocs>
    <tag-input-best-demo />
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
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
import TagInputAPI from 'lightvueDocs/example/tag-input/TagInputAPI';
import TagInputBestDemo from 'lightvueDocs/example/tag-input/TagInputBestDemo';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Badge Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'TagInput Documentation | LightVue',
      },
      {
        property: 'og:description',
        content: 'The Lightvue Tag Input component allow user to type in multiple values as tags.',
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
    TagInputBestDemo,
  },
  title: 'Tag Input',
  description: `The Lightvue Tag Input component allow user to type in multiple values as tags.`,
  packageName: 'tag-input',
  componentName: 'LvTagInput',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: TagInputAPI,
  demoList: [
    {
      id: 'Default',
      title: 'Default',
      file: 'tag-input/TagInputDemo',
      description: 'Lightvue comes with stunnig look and feel for <span>LvTagInput</span> component. This is the default usecase for LvTagInput component.LvTagInput is both compatible with <span>Vue 2</span> and <span>Vue 3</span>',
    },
    {
      id: 'rounded-tag-input',
      title: 'Rounded',
      file: 'tag-input/TagInputRounded',
      description: 'You can use the rounded version of tag input by setting <span>Rounded</span> prop true',
    },
    {
      id: 'custom-tag-input',
      title: 'Custom',
      description: '<span>LvTagInput</span> is totally customizable vue component. You can change the look and feel of tag input in the following way',
      file: 'tag-input/TagInputCustomTagDemo',
    },
    {
      id: 'object-as-input',
      title: 'Object Datatype',
      description: 'You can use object as a v-model value for LvTagInput',
      file: 'tag-input/TagInputObjectDemo',
    },
    {
      id: 'Limit',
      title: 'Limit Tags',
      description: 'limit tags using <span>limit</span> prop which takes number as input LvTagInput',
      file: 'tag-input/TagInputLimitDemo',
    },
  ],
};
</script>
