<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" :badge="$options.badge">
    <docs-card-vue title="Basic" file="overlay-panel/OverlayPanelDemo_Basic" overflow />
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
import OverlayPanelAPI from 'lightvueDocs/example/overlay-panel/OverlayPanelAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Overlay Panel',
  description: `OverlayPanel is a container component positioned as connected to its target.`,
  packageName: 'overlay-panel',
  componentName: 'LvOverlayPanel',
  status: 'Stable',
  badge: 'lv--success',
  apiData: OverlayPanelAPI,
};
</script>
