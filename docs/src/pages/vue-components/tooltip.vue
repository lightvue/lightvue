<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" :badge="$options.badge">
    <docs-card-vue title="With Hover event" file="tooltip/TooltipHoverDemo" />
    <docs-card-vue title="With Focus event" file="tooltip/TooltipFocusDemo" />
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
import TooltipAPI from 'lightvueDocs/example/tooltip/TooltipAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Tooltip',
  description: `Tooltips can be used to show additional information about any element upon hovering over it.`,
  packageName: 'tooltip',
  componentName: 'LvTooltip',
  status: 'Stable',
  badge: 'info',
  apiData: TooltipAPI,
  apiData: {},
};
</script>
