<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <GlassCardBestDemo />
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
import GlassCardBestDemo from 'lightvueDocs/example/glasscard/GlassCardBestDemo';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import GlassCardAPI from 'lightvueDocs/example/glasscard/GlassCardAPI';

export default {
  head: {
    title: ' GlassmorphicCard Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' GlassmorphicCard Documentation | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Glass Card components can be used as elegant containers/wrappers for placing content over images.',
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
    GlassCardBestDemo,
  },
  title: 'Glassmorphic Card',
  description: `Glass Card components can be used as elegant containers/wrappers for placing content over images.`,
  packageName: 'glasscard',
  componentName: 'LvGlassCard',
  // status: 'Pre-release',
  apiData: GlassCardAPI,
};
</script>
