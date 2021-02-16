<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Slider demo" file="examples/slider/SliderDemo" />
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
import SliderAPI from '@/collections/slider/SliderAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Slider',
  description: `Slider is another basic component from light vue which provide user to have a slider in the web application which can be used to rate or select a range.`,
  packageName: 'slider',
  componentName: 'LvSlider',
  apiData: SliderAPI,
};
</script>
