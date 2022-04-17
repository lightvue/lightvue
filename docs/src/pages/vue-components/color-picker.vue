<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" hasPlayground hasDocs :demoList="$options.demoList">
    <color-picker-best-demo></color-picker-best-demo>
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :discription="demo.discription" :file="demo.file" :id="demo.id" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import ColorPickerBestDemo from 'lightvueDocs/example/colorpicker/ColorPickerBestDemo.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import ColorpickerAPI from 'lightvueDocs/example/colorpicker/ColorpickerAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' ColorPicker Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' ColorPicker Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Colorpicker can be used when a user needs to pick a color. Additionally, a customized color palette can also be passed as an array.',
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
    ColorPickerBestDemo,
  },
  title: 'Colorpicker',
  description: `LvColorpicker can be used when a user needs to pick a color. Additionally, a customized color palette can also be passed as an array.`,
  packageName: 'colorpicker',
  componentName: 'LvColorpicker',
  status: COMPONENT_STATUS.UPDATED,
  apiData: ColorpickerAPI,
  demoList: [
    {
      id: 'basic-uses',
      title: 'Basic usage',
      file: 'colorpicker/ColorpickerDemo',
      discription: 'You can use the <span>LvColorPicker</span> with some basic and complex use cases.You can use v-model for two way binding and updating value.You can set the label to colour picker through <span>label</span> prop.You can set the pallet colors by passing a array to <span>colors</span> prop.LightVue color-picker is Both compatible with Vue 2.x and Vue 3.x',
    },
    {
      id: 'without-input',
      title: 'Without input',
      file: 'colorpicker/ColorpickerDemo2',
      discription: 'You can use <span>LvColorPicker</span> without the input. You have to set <span>withoutInput</span> prop true',
    },
    {
      id: 'with-pallet',
      title: 'Without pallet',
      file: 'colorpicker/ColorpickerDemo3',
      discription: 'You can use <span>LvColorPicker</span> without the colour pallet. You have to set <span>hidePalette</span> prop true',
    },
  ],
};
</script>
