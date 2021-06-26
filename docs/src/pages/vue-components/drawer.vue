<template>
  <docs-page-layout
    :title="$options.title"
    :description="$options.description"
  >
    <docs-card-vue
      title="Drawer demo"
      file="drawer/DrawerDemo"
    />
    <template #api>
      <getting-started
        :package-name="$options.packageName"
        :component-name="$options.componentName"
      />
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

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Drawer',
  description: ``,
  packageName: 'drawer',
  componentName: 'LvDrawer',
  apiData: DrawerAPI,
};
</script>
