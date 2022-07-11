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
  description: `Take array of inputs  `,
  packageName: 'tag-input',
  componentName: 'LvTagInput',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: BadgeAPI, // iska kuch kaam nhi h remove kar sakte h
  TagInputAPI, // API me hum kya kya use karte h uske liye h
  demoList: [
    {
      id: 'Best',
      title: 'Best',
      file: 'tag-input/TagInputDemo',
      description: 'You can use the checkbox with various predefined colors by passing them in <span>color</span> prop, avaliable colors are <span>sucess</span>,<span>warning</span>,<span>primary</span>,<span>info</span>,<span>danger</span>. You can set the corners of checkbox to round by setting <span>rounded</span> prop to true.you can change the appearence of checkbox through <span>thick</span>,<span>filled</span>,<span>plain</span>,<span>smooth</span>. LightVue checkbox is Both compatible with Vue 2.x and Vue 3.x',
    },
    {
      id: 'Basic',
      title: 'Basic',
      file: 'tag-input/TagInputDemo_Basic',
      description: 'Basic Usage',
    },
    {
      id: 'Rounded',
      title: 'Rounded',
      file: 'tag-input/TagInputDemo_Rounded',
      description: 'Basic Usage TagInputDemo_Rounded',
    },
    {
      id: 'Custom',
      title: 'Custom',
      file: 'tag-input/TagInputDemo_CustomTagInput',
      description: 'Basic Usage TagInputDemo_CustomTagInput',
    },
    {
      id: 'Array-of-Strings',
      title: 'Array of Strings',
      file: 'tag-input/TagInputDemo_ArrayOfStrings',
      description: 'Basic Usage TagInputDemo_ArrayOfStrings',
    },
    {
      id: 'Array-of-Objects',
      title: 'Array of Objects',
      file: 'tag-input/TagInputDemo_ArrayOfObjects',
      description: 'Basic Usage TagInputDemo_ArrayOfObjects',
    },
  ],
};
</script>
