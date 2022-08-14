<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <icon-picker-best-demo></icon-picker-best-demo>
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
import IconPickerBestDemo from 'lightvueDocs/example/iconpicker/IconPickerBestDemo.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import IconpickerAPI from 'lightvueDocs/example/iconpicker/IconpickerAPI';
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
  data() {
    return {
      demos: [
        {
          title: 'Basic Usage',
          file: 'iconpicker/IconpickerDemo',
          description: 'You can use the <span>LvIconPicker</span> with some basic and complex use cases.You can use v-model for two way binding and updating value.You can set the label to icon picker through <span>label</span> prop.You can set the pallet icons by passing a array to <span>icons</span> prop. LightVue icon-picker is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Without input',
          file: 'iconpicker/IconpickerDemo2',
          description: 'You can use <span>LvIconPicker</span> without the input. You have to set <span>withoutInput</span> prop true',
        },
        {
          title: 'Without Pallet',
          file: 'iconpicker/IconpickerDemo3',
          description: 'You can use <span>LvIconPicker</span> without the icon pallet. You have to set <span>hidePalette</span> prop true',
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
    IconPickerBestDemo,
  },
  title: 'Icon Picker',
  description: `LvIconpicker can be used when a user needs to pick a icon. Additionally, a customized icon palette can also be passed as an array.`,
  packageName: 'iconpicker',
  componentName: 'LvIconpicker',
  status: COMPONENT_STATUS.UPDATED,
  apiData: IconpickerAPI,
};
</script>
