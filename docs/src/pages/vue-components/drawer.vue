<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <drawer-best-demo />
    <docs-card-vue title="Drawer" file="drawer/DrawerDemo" />
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
