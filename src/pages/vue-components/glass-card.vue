<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Background blur" file="examples/glasscard/GlassBlurDemo" />
    <docs-card-vue title="Background opacity" file="examples/glasscard/GlassOpacityDemo" />
    <docs-card-vue title="Background color and padding" file="examples/glasscard/GlassBGandPaddingDemo" />
    <docs-card-vue title="Border and border-radius" file="examples/glasscard/GlassBorderDemo" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-card title="APIs" :responsive="false">
        <docs-all-api :api-data="$options.apiData" />
      </docs-card>
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import GlassCardAPI from '@/examples/glasscard/GlassCardAPI';

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
  apiData: GlassCardAPI,
};
</script>
