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
import ProgressBarAPI from 'lightvueDocs/example/progressbar/ProgressBarAPI';

export default {
  head: {
    title: 'ProgressBar Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' ProgressBar Docs | LightVue',
      },
      {
        property: 'og:description',
        content: 'Progress Bar component can be used as a process status indicator for a time-consuming process. ',
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
  data() {
    return {
      demos: [
        {
          title: 'Dynamic',
          file: 'progressbar/ProgressBarDemo_Dynamic',
          description: 'You can use the progress bar for various purpose like showing status,progress etc. LightVue comes with some stunning designs for progress bar.You can Update the progerss bar by Updating <span>value</span> prop.You can also hide or show the Value on progerss bar by setting <span>showValue</span> false. LightVue Progress bar is Both compatible with Vue <span>3.x</span> and Vue <span>2.x</span>',
        },
        {
          title: 'Static',
          file: 'progressbar/ProgressBarDemo_Static',
          description: 'You can use the progress bar for various purpose like showing status,progress etc. LightVue comes with some stunning designs for progress bar.You can Update the progerss bar by Updating <span>value</span> prop.You can also hide or show the Value on progerss bar by setting <span>showValue</span> false. LightVue Progress bar is Both compatible with Vue <span>3.x</span> and Vue <span>2.x</span>',
        },
        {
          title: 'Indeterminate',
          description: 'You can also set the mode to intermidiate by settting <span>mode</span> prop to <span>indeterminate</span>',
          file: 'progressbar/ProgressBarDemo_Indeterminate',
        },
        {
          title: 'Colored',
          description: 'You can change the colour of progress bar by passing a color string into <span>color</span> prop ',
          file: 'progressbar/ProgressBarDemo_Colored',
        },
      ],
    };
  },
  title: 'Progress Bar',
  description: `Progress Bar component can be used as a process status indicator for a time-consuming process.`,
  packageName: 'progressbar',
  componentName: 'lv-progressbar',
  apiData: ProgressBarAPI,
};
</script>
