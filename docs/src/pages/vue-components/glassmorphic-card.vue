<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Background blur" file="glasscard/GlassBlurDemo" />
    <docs-card-vue title="Background opacity" file="glasscard/GlassOpacityDemo" />
    <docs-card-vue title="BG color and padding" file="glasscard/GlassBGandPaddingDemo" />
    <docs-card-vue title="Border and border-radius" file="glasscard/GlassBorderDemo" />
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
import GlassCardAPI from 'lightvue/example/glasscard/GlassCardAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Glassmorphic Card',
  description: `Glass Card components can be used as elegant containers/wrappers for placing content over images.`,
  packageName: 'glasscard',
  componentName: 'LvGlassCard',
  // apiData: GlassCardAPI,
};
</script>
