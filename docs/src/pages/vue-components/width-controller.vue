<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <WidthController></WidthController>'
    <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    </template>

    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <!-- <docs-all-api :api-data="$options.apiData" /> -->
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
// import TooltipAPI from 'lightvueDocs/example/tooltip/TooltipAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';
import WidthController from 'lightvueDocs/example/width-controller/WidthControllerDemo';

export default {
  head: {
    title: ' Width-Controller | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Width-Layout Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: ' ',
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
    WidthController,
  },
  data() {
    return {
      demos: [
        {
          title: 'Button Width',
          file: 'width-controller/WidthControllerDemo2',
          description: '',
        },
        // {
        //   title: 'With Focus event',
        //   file: 'tooltip/TooltipFocusDemo',
        //   description: 'You can use the Tooltip for various purpose like show additional information etc. LightVue comes with some stunning designs for Tooltip.You can use the tooltip in the following way. LightVue Tooltip bar is Both compatible with Vue 2.x and Vue 3.x.',
        // },
      ],
    };
  },
  title: 'Width-Controller',
  description: ``,
  packageName: 'WidthController',
  componentName: 'LvWidthController',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  //   apiData: TooltipAPI,
  apiData: {},
};
</script>
