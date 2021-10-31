<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <CardBestDemo />
    <docs-card-vue title="Shadow styles" file="card/CardShadowDemo" />
    <docs-card-vue title="Border radius" file="card/CardRadiusDemo" />
    <docs-card-vue title="Background color and Padding" file="card/CardPaddingAndBGcolorDemo" />
    <docs-card-vue title="Enabling border" file="card/CardBorderDemo" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import CardBestDemo from 'lightvueDocs/example/card/CardBestDemo';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import CardAPI from 'lightvueDocs/example/card/CardAPI';

export default {
  head: {
    title: ' Card Docs | LightVue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' CardDocs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Card components can be used as flexible containers/wrappers for other UI elements.',
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
    CardBestDemo,
  },
  title: 'Card',
  description: `Card components can be used as flexible containers/wrappers for other UI elements.`,
  packageName: 'card',
  componentName: 'LvCard',
  apiData: CardAPI,
};
</script>
