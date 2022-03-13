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
          discription: 'Use the buttons with some basic and complex use cases by passing either classes or props eg. for link button, pass <span>--link-button</span> For disable button, set the <span>disable</span> prop to true.',
          // discription: 'You can use the buttons with some basic use cases by simply passing classes or by passing props eg.for link button you can pass <span>--link-button</span> for disable button set the <span>disable</span> prop to true',
        },
        {
          title: 'Static',
          file: 'progressbar/ProgressBarDemo_Static',
          discription: 'You can add left and right icons to the Button component using the <span> icon </span> and <span> icon-right </span> props respectively.(The icons can be String) </br>You can also use <span> Light Icons </span> from <span> LightVue</span> and pass it into the button.',
        },
        {
          title: 'Indeterminate',
          discription: 'You can simply change color by changing the class name.You can set the values to suffix to <span>lv--</span>  <span>primary</span> <span>secondary</span> <span>success</span> <span>info</span> <span>warning</span> <span>help</span> <span>danger</span>,<span>complementary</span>',
          file: 'progressbar/ProgressBarDemo_Indeterminate',
        },
        {
          title: 'Colored',
          discription: 'You can set the button style to text by passing <span>--text-button</span> alongside with other variation classes ',
          file: 'progressbar/ProgressBarDemo_Colored',
        },
      ],
    };
  },
  title: 'Progress Bar',
  description: `Progress Bar component can be used as a process status indicator for a time-consuming process.`,
  packageName: 'progressbar',
  componentName: 'lv-progressbar',
  // status: 'Stable',
  apiData: ProgressBarAPI,
};
</script>
