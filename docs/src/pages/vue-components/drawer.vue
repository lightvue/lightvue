<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <drawer-best-demo />
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
import DrawerAPI from 'lightvueDocs/example/drawer/DrawerAPI';
import DrawerBestDemo from 'lightvueDocs/example/drawer/DrawerBestDemo.vue';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Drawer Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Drawer Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: ' ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic Usage',
          file: 'drawer/DrawerDemoRelative',
          description: 'LightVue comes with some stunning designs for Drawer.There are different variations and customization of drawer present in lightVue you can go through this page for more info. LightVue Drawer is Both compatible with Vue <span>3.x</span> and Vue <span>2.x</span>',
        },
        {
          title: 'Absolute',
          file: 'drawer/DrawerDemo',
          description: 'If you set <span>absolute</span> prop true.The drawer will open relative to the container',
        },
      ],
    };
  },

  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
    DrawerBestDemo,
  },
  title: 'Drawer',
  description: ``,
  packageName: 'drawer',
  componentName: 'LvDrawer',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: DrawerAPI,
};
</script>
