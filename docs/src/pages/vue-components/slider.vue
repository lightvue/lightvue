<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <SliderBestDemo></SliderBestDemo>

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
import SliderBestDemo from 'lightvueDocs/example/slider/SliderBestDemo.vue';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import SliderAPI from 'lightvueDocs/example/slider/SliderAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Slider Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' Slider Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Slider is another basic component from light vue which provide user to have a slider in the web application which can be used to rate or select a range.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic Usage',
          file: 'slider/SliderDemo',
          description: 'Use the <span>LvRangeSlider</span> with some basic and complex use cases by passing either classes or props. LightVue slider is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Custom Range',
          file: 'slider/SliderDemo_CustomRange',
          description: 'You can set the Custom range to the slider by Combining the minimum and maximum values through <span>min</span> & <span>max</span> props.',
        },
        {
          title: 'Floating label',
          file: 'slider/SliderDemo_Label',
          description: 'You can show/hide the floating label which contains the value by setting <span>showValue</span> prop. Default value is true',
        },
        {
          title: 'Set Slider Color',
          file: 'slider/SliderDemo_CustomColor',
          description: 'You can Change the slider color by passing a string in <span>sliderColor</span> prop.Default value is #607c8a',
        },
        {
          title: 'Set Track Color',
          file: 'slider/SliderDemo_Color',
          description: 'You can Change the Track color by passing a string in <span>trackColor</span> prop.Default value is #e2e2e2',
        },
        {
          title: 'Step',
          file: 'slider/SliderDemo_Step',
          description: 'You can Change the step count by passing a number in <span>step</span> prop.',
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
    SliderBestDemo,
  },
  title: 'Slider',
  description: `Slider is another basic component from light vue which provide user to have a slider in the web application which can be used to rate or select a range.`,
  packageName: 'slider',
  componentName: 'LvSlider',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: SliderAPI,
};
</script>
