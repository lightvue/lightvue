<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <docs-card-vue title="Adjusting height & width" file="shimmers/examples/ShimmersDemo_dimension" />
    <docs-card-vue title="Adjusting color" file="shimmers/examples/ShimmersDemo_color" />
    <docs-card-vue title="Adjusting opacity" file="shimmers/examples/ShimmersDemo_opacity" />
    <docs-card-vue title="Adjusting speed" file="shimmers/examples/ShimmersDemo_speed" />
    <docs-card-vue title="Disabling animation" file="shimmers/examples/ShimmersDemo_animate" />
    <docs-card-vue title="Presets" file="shimmers/examples/ShimmersDemo__Preset" />
    <docs-card-vue title="Default" file="shimmers/examples/ShimmersDemo__Basic" />
    <docs-card-vue title="Code Loader" file="shimmers/examples/ShimmersDemo__CodeLoader" />
    <docs-card-vue title="List Loader" file="shimmers/examples/ShimmersDemo__ListLoader" />
    <docs-card-vue title="Card List" file="shimmers/examples/ShimmersDemo__CardList" />
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
import ShimmersAPI from 'lightvueDocs/example/shimmers/ShimmersAPI';

export default {
  head: {
    title: 'LightVue | ShimmerDocs ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'LightVue | ShimmerDocs',
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
  },
  title: 'Skeleton loaders (Shimmer loaders)',
  description: `Skeleton Loader components can be used as a loading animations or space-fillers while waiting for the actual content to load.`,
  packageName: 'LvSkeleton',
  componentName: 'LvSkeleton',
  // status: 'Stable',
  apiData: ShimmersAPI,
};
</script>
