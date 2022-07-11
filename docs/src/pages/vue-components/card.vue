<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <CardBestDemo />
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
import CardBestDemo from 'lightvueDocs/example/card/CardBestDemo';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import CardAPI from 'lightvueDocs/example/card/CardAPI';

export default {
  head: {
    title: ' Card Documentation | LightVue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' CardDocumentation | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Card components can be used as flexible containers/wrappers for other UI elements.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Shadow',
          file: 'card/CardShadowDemo',
          description: 'You can change the shadow style of a card by passing value in <span>shadowStyle</span> there are 5 styles present. LightVue card is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Border Radius',
          file: 'card/CardRadiusDemo',
          description: 'You can set the border radius of card  by passing a value along with unit in <span>borderRadius</span> prop ',
        },
        {
          title: 'Background color and Padding',
          description: 'You can change the background color of card by passing a string in <span>backgroundColor</span>.you can  also set the padding for card in native way by passing a string in <span>padding</span> prop',
          file: 'card/CardPaddingAndBGcolorDemo',
        },
        {
          title: 'Enabling border',
          description: 'You can set the border to card by setting <span>showBorder</span> prop true',
          file: 'card/CardBorderDemo',
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
    CardBestDemo,
  },
  title: 'Card',
  description: `Card components can be used as flexible containers/wrappers for other UI elements.`,
  packageName: 'card',
  componentName: 'LvCard',
  apiData: CardAPI,
};
</script>
