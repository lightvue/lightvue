<template>
  <!-- <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status"> -->
  <docs-page-layout :title="$options.title" :description="$options.description" :demoList="$options.demoList" hasPlayground hasDocs>
    <template #title-right> </template>
    <tag-input-best-demo />
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    <!-- <docs-card-vue title="Basic" file="tag-input/TagInputDemo" overflow /> -->
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <!-- <docs-card title="APIs" :responsive="false">  -->
      <docs-all-api :api-data="$options.apiData" />
      <!-- </docs-card> -->
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import BadgeAPI from 'lightvueDocs/example/badge/BadgeApi';
import TagInputBestDemo from 'lightvueDocs/example/tag-input/TagInputBestDemo';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';
import TagInputAPI from 'lightvueDocs/example/tag-input/TagInputAPI.js';
export default {
  head: {
    title: ' Tag Input Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'Badge Documentation | LightVue',
      },
      {
        property: 'og:description',
        content: 'Badge component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.',
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
  description: `Take array of inputs, we can allows you to add, remove, manager, manipulate tags and tokens. `,
  packageName: 'tag-input',
  componentName: 'LvTagInput',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: TagInputAPI,
  demoList: [
    // {
    //   id: 'Best',
    //   title: 'Best',
    //   file: 'tag-input/TagInputDemo',
    //   description: 'Best Usage',
    // },
    {
      id: 'Basic',
      title: 'Basic Usage',
      file: 'tag-input/TagInputDemo_Basic',
      description: 'Basic Usage of Tag Input',
    },
    {
      id: 'Rounded',
      title: 'Rounded',
      file: 'tag-input/TagInputDemo_Rounded',
      description: 'The tag input style in Material Components can be styled to appear as though it’s been rounded off and thus creating a smoother feel. This can be achieved by simply setting the rounded prop to true like so:',
    },
    {
      id: 'Custom',
      title: 'Custom',
      file: 'tag-input/TagInputDemo_CustomTagInput',
      description: 'You can use CustomTagInput for creating a custom tag input as per your prefrences. You can add any <span>icon</span> or <span>background color</span> and even the <span>text color</span> of the tag input. ',
    },
    {
      id: 'Array-of-Strings',
      title: 'Array of Strings',
      file: 'tag-input/TagInputDemo_ArrayOfStrings',
      description: 'By default we pass the <span>tag input</span> as <span>array of strings</span>. ',
    },
    {
      id: 'Array-of-Objects',
      title: 'Array of Objects',
      file: 'tag-input/TagInputDemo_ArrayOfObjects',
      description: 'For custom usage we can use <span>tag input</span> as <span>array of objects</span> where we need to define the <span>label</span> and its corresponding <span>value</span> like .',
    },
  ],
};
</script>
