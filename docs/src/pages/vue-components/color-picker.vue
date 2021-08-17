<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Demo" file="colorpicker/ColorpickerDemo" />
    <docs-card-vue title="Color palette" file="colorpicker/ColorPaletteDemo" />
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
import ColorpickerAPI from 'lightvueDocs/example/colorpicker/ColorpickerAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Colorpicker',
  description: `LvColorpicker can be used when a user needs to pick a color. Additionally, a customized color palette can also be passed as an array.`,
  packageName: 'colorpicker',
  componentName: 'LvColorpicker',
  apiData: ColorpickerAPI,
};
</script>
