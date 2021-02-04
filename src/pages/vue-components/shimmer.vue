<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Adjusting height and width" file="examples/shimmers/examples/ShimmersDemo_dimension" />
    <docs-card-vue title="Adjusting color" file="examples/shimmers/examples/ShimmersDemo_color" />
    <docs-card-vue title="Adjusting opacity" file="examples/shimmers/examples/ShimmersDemo_opacity" />
    <docs-card-vue title="Adjusting animation speed" file="examples/shimmers/examples/ShimmersDemo_speed" />
    <docs-card-vue title="Disabling animation" file="examples/shimmers/examples/ShimmersDemo_animate" />
    <docs-card-vue title="Presets for common use-cases" file="examples/shimmers/examples/ShimmersDemo__Preset" />
    <!-- <docs-card-vue title="Default" file="pages/shimmers/examples/ShimmersDemo__Basic" /> -->
    <!-- <docs-card-vue title="Code Loader" file="pages/shimmers/examples/ShimmersDemo__CodeLoader" /> -->
    <!-- <docs-card-vue title="List Loader" file="pages/shimmers/examples/ShimmersDemo__ListLoader" /> -->
    <!-- <docs-card-vue title="Card List" file="pages/shimmers/examples/ShimmersDemo__CardList" /> -->
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
import ShimmersAPI from '@/collections/skeleton/ShimmersAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Skeleton loaders (Shimmer loaders)',
  description: `Skeleton Loader components can be used as a loading animations or space-fillers while waiting for the actual content to load.`,
  packageName: 'LvSkeleton',
  componentName: 'LvSkeleton',
  apiData: ShimmersAPI,
};
</script>
