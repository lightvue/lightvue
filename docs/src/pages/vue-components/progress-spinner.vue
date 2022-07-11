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
import ProgressSpinnerAPI from 'lightvueDocs/example/progressspinner/ProgressSpinnerAPI';

export default {
  head: {
    title: ' ProgressSpinner Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' ProgressSpinner Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Progress spinner components can be used as a loading animations or space-fillers while waiting for the actual content to load. ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Size',
          file: 'progressspinner/ProgressSpinnerSizeDemo',
          description: 'You can use the LightVue spinner for various purpose like  loading animations or space-filler etc. LightVue comes with some stunning designs for spinners and it is highly customizable.You can also specify the size of spinner by pasing a value with its unit in <span>size</span> prop. LightVue Progress bar is Both compatible with Vue <span>3.x</span> and Vue <span>2.x</span>',
        },
        {
          title: 'Color',
          file: 'progressspinner/ProgressSpinnerColorDemo',
          description: 'You can also set the color for spinner by passing a string into <span>color</span> prop',
        },
        {
          title: 'Stroke-width',
          description: 'You can also set the stroke width of spinner by passing a value in <span>strokeWidth</span> prop',
          file: 'progressspinner/ProgressSpinnerStrokeDemo',
        },
        {
          title: 'Animation-duration',
          description: 'You can change The animation duration for spinner by passing a value in <span>animationDuration</span> prop ',
          file: 'progressspinner/ProgressSpinnerDurationDemo',
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
  title: 'Progress Spinners',
  description: `Progress spinner components can be used as a loading animations or space-fillers while waiting for the actual content to load.`,
  packageName: 'progressSpinner',
  componentName: 'lv-progressspinner',
  // status: 'Stable',
  apiData: ProgressSpinnerAPI,
};
</script>
