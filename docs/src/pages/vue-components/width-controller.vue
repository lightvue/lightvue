<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <WidthControllerBestDemo />
    <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    </template>

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
import WidthControllerAPI from 'lightvueDocs/example/width-controller/WidthControllerAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';
import WidthControllerBestDemo from 'lightvueDocs/example/width-controller/WidthControllerBestDemo';

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
    WidthControllerAPI,
    WidthControllerBestDemo,
  },
  data() {
    return {
      demos: [
        {
          title: 'Button-Width',
          file: 'width-controller/WidthControllerDemo_Button',
          description: 'You can also adjust the width between two <span>LvButtons</span> using the <span>LvWidthController</span>.',
        },
      ],
    };
  },
  title: 'Width-Controller',
  description: 'LvWidthController allows you to adjust the width using LvWidthController in percentage . You can manually set the width (in percentage) smoothly by sliding the slider of that particular section or block.',
  packageName: 'WidthController',
  componentName: 'LvWidthController',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: WidthControllerAPI,
};
</script>
