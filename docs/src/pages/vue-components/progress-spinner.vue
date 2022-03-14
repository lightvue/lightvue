<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :discription="demo.discription" :file="demo.file" :id="demo.id" />
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
          discription: 'You can use the progress bar for various purpose like showing status,progress etc.LightVue comes with some stunning designs for progress bar.You can Update the progerss bar by Updating <span>value</span> prop.You can also hide or show the Value on progerss bar by setting <span>showValue</span> false.lightVue Progress bar is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Color',
          file: 'progressspinner/ProgressSpinnerColorDemo',
          discription: 'You can use the progress bar for various purpose like showing status,progress etc.LightVue comes with some stunning designs for progress bar.You can Update the progerss bar by Updating <span>value</span> prop.You can also hide or show the Value on progerss bar by setting <span>showValue</span> false.lightVue Progress bar is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Stroke-width',
          discription: 'You can also set the mode to intermidiate by settting <span>mode</span> prop to <span>indeterminate</span>',
          file: 'progressspinner/ProgressSpinnerStrokeDemo',
        },
        {
          title: 'Animation-duration',
          discription: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
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
