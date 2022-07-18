<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" hasDocs>
    <PopOverDemoBest />
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout';
import DocsCardVue from '@/components/docs-card/DocsCardVue';
import DocsCard from '@/components/docs-card/DocsCard';
import GettingStarted from '@/components/docs-card/GettingStarted';
import DocsAllApi from '@/components/docs-card/DocsAllApi';
import PopOverAPI from 'lightvueDocs/example/popover/PopOverAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';
import PopOverDemoBest from 'lightvueDocs/example/popover/PopOverDemoBest.vue';

export default {
  head: {
    title: 'Pop Over | LightVue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'LightVue | Dialog',
      },
      {
        property: 'og:description',
        content: 'LightVue Dialog helps the user to have modal and additional dialog box with their data.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: {
    PopOverDemoBest,
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'PopOver',
  description: 'The Popover component is similar to tooltips; it is a pop-up box that appears when the user clicks on an element. The difference is that the popover can contain much more content.',
  packageName: 'popover',
  componentName: 'LvPopOver',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: PopOverAPI,
  demoList: [
    {
      id: 'basic-usage',
      title: 'Basic usage',
      file: 'popover/PopOverDemo',
      description: 'Four options are available: <span>top, right, bottom, and left </span> aligned. You can also define the choice of color that you want to the PopOver using <span>Background Color</span> as <span>prop</span>. ',
    },
    {
      id: 'popover-hover',
      title: 'On Hover',
      file: 'popover/PopOverHoverDemo',
      description: 'PopOver using <span>hover</span> property.',
    },
    {
      id: 'popover-different-color',
      title: 'With different Color',
      file: 'popover/PopOverDemo_Color',
      description: 'By passing the <span>backgroundColor</span> as a prop we can change the popover color.',
    },
    // {
    //   id: 'popover-different-icons',
    //   title: 'With different Icons',
    //   file: 'popover/PopOverDemo_Icons',
    //   description: '',
    // },
    {
      id: 'popover-model-value',
      title: 'External Target',
      file: 'popover/PopOverVModel',
      description: 'Using PopOver Model External Target you can target any location on the webpage for showing a PopModel.',
    },
  ],
};
</script>
