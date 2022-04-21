<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
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
import ShimmersAPI from 'lightvueDocs/example/shimmers/ShimmersAPI';

export default {
  head: {
    title: ' Shimmer Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Shimmer Docs | LightVue ',
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
          file: 'shimmers/examples/ShimmersDemoBasic',
          description: 'You can use the shimmers Loader for various purpose like loading animations or space-filler etc. LightVue comes with some stunning designs for shimmers loaders.There are different types of shimmers are present in lightVue you can go through this page for more info.You can customize the LightVue Shimmer in various ways. LightVue Shimmer Loaders is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Adjusting height & width',
          file: 'shimmers/examples/ShimmersDemo_dimension',
          description: 'You can change the height and width of shimmer by passing value in <span> height </span> and <span> width </span> props respectively.',
        },
        {
          title: 'Colors',
          description: 'You can change the primaryColor and secondaryColor of shimmer by passing value in <span> primaryColor </span> and <span> secondaryColor </span> props respectively.',
          file: 'shimmers/examples/ShimmersDemo_color',
        },
        {
          title: 'Opacity',
          description: 'You can change the primaryOpacity and secondaryOpacity of shimmer by passing value in <span> primaryOpacity </span> and <span> secondaryOpacity </span> props respectively',
          file: 'shimmers/examples/ShimmersDemo_opacity',
        },
        {
          title: 'Speed',
          description: 'You can change the speed of animation by passing value in  <span> speed </span> prop.',
          file: 'shimmers/examples/ShimmersDemo_speed',
        },
        {
          title: 'Disable Animation',
          description: 'You can change the disable the animation by setting <span> animate </span> prop false.',
          file: 'shimmers/examples/ShimmersDemo_animate',
        },
        {
          title: 'Code Loader',
          description: 'LightVue comes with some preset for shimmer loaders.<span>lv-code-loader</span> is one of them you can custmize it in the same way as shimmers',
          file: 'shimmers/examples/ShimmersDemo__CodeLoader',
        },
        {
          title: 'List Loader',
          description: 'LightVue comes with some preset for shimmer loaders.<span>lv-list-loader</span> is one of them you can custmize it in the same way as shimmers ',
          file: 'shimmers/examples/ShimmersDemo__ListLoader',
        },
        {
          title: 'Card List',
          description: 'LightVue comes with some preset for shimmer loaders.<span>lv-card-list</span> is one of them you can custmize it in the same way as shimmers ',
          file: 'shimmers/examples/ShimmersDemo__CardList',
        },
        {
          title: 'Custom Loaders',
          description: 'LightVue comes with some preset for shimmer loaders.<span>lv-skeleton</span> is one of them you can custmize it in the same way as shimmers ',
          file: 'shimmers/examples/ShimmersDemo__Basic',
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
  },
  title: 'Skeleton loaders (Shimmer loaders)',
  description: `Skeleton Loader components can be used as a loading animations or space-fillers while waiting for the actual content to load.`,
  packageName: 'LvSkeleton',
  componentName: 'LvSkeleton',
  // status: 'Stable',
  apiData: ShimmersAPI,
};
</script>
