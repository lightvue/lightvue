<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" hasPlayground hasDocs :demoList="$options.demoList">
    <SliderBestDemo></SliderBestDemo>
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :discription="demo.discription" :file="demo.file" :id="demo.id" />
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
  demoList: [
    {
      id: 'basic-usage',
      title: 'Basic usage',
      file: 'slider/SliderDemo',
      discription: 'Use the <span>LvRangeSlider</span> with some basic and complex use cases by passing either classes or props.LightVue slider is Both compatible with Vue 2.x and Vue 3.x',
    },
    {
      id: 'custom-range',
      title: 'Custom range',
      file: 'slider/SliderDemo_CustomRange',
      discription: 'You can set the Custom range to the slider by Combining the minimum and maximum values through <span>min</span> & <span>max</span> props.',
    },
    {
      id: 'floating-label',
      title: 'Floating label',
      file: 'slider/SliderDemo_Label',
      discription: 'You can show/hide the floating label which contains the value by setting <span>showValue</span> prop. Default value is true',
    },
    {
      id: 'set-slider-color',
      title: 'Set slider color',
      file: 'slider/SliderDemo_CustomColor',
      discription: 'You can Change the slider color by passing a string in <span>sliderColor</span> prop.Default value is #607c8a',
    },
    {
      id: 'set-track-color',
      title: 'Set track color',
      file: 'slider/SliderDemo_Color',
      discription: 'You can Change the Track color by passing a string in <span>trackColor</span> prop.Default value is #e2e2e2',
    },
    {
      id: 'step',
      title: 'Step',
      file: 'slider/SliderDemo_Step',
      discription: 'You can Change the step count by passing a number in <span>step</span> prop.',
    },
  ],
};
</script>
