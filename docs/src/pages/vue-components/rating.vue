<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <rating-best-demo />
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
import RatingBestDemo from 'lightvueDocs/example/rating/RatingBestDemo.vue';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import RatingAPI from 'lightvueDocs/example/rating/RatingAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Rating Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/og-img.png' },
      {
        property: 'og:site_name',
        content: ' Rating Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: 'Rating component can be used when user wants to provide an option to rate the products/services provided.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: {
    RatingBestDemo,
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic Usage',
          file: 'rating/examples_options/RatingDemo_1',
          description: 'You can use the <span>LvRating</span> with some basic and complex use cases by passing either classes or props. LightVue rating is Both compatible with Vue 2.x and Vue 3.x',
        },
        {
          title: 'Custom Increament',
          file: 'rating/examples_options/RatingDemo_5',
          description: 'You can specify the increament count of <span>LvRating</span> through <span>increment</span> prop.If you pass 0.5 the increament will be half star.If it is 0.25 increament will be quater star',
        },
        {
          title: 'Readonly',
          description: 'You can set star to Readonly mode by setting <span>read-only</span> prop true',
          file: 'rating/examples_options/RatingDemo_2',
        },
        {
          title: 'Show hide rating',
          description: 'You can specify if you want to display the star count or not by setting <spna>show-rating</spna> prop.default value is true',
          file: 'rating/examples_options/RatingDemo7',
        },
        {
          title: 'Specifying preset value',
          description: 'You can Specifying preset value by passing a desire value in the <span>rating</span> prop.',
          file: 'rating/examples_options/RatingDemo_6',
        },
        {
          title: 'Star Count',
          description: 'You can specify the number of stars you want to display by passing a number into <span>max-rating</span> prop.By default 5 stars will be displayed.',
          file: 'rating/examples_options/RatingDemo_3',
        },
        {
          title: 'Events',
          description: 'You can get the selected rating through various events like hover and click as below',
          file: 'rating/examples_options/RatingDemo_4',
        },
        {
          title: 'Specifying Color ',
          description: 'You can specify the color of an active star rating through <span>active-color</span> prop',
          file: 'rating/examples_style/RatingDemo_1',
        },
        {
          title: 'Inactive Color ',
          description: 'You can specify the color of an inactive star rating through <span>inactive-color</span> prop',
          file: 'rating/examples_style/RatingDemo_6',
        },
        {
          title: 'Size',
          description: 'You can specify the size if star by passing a value in <span>star-size</span> prop',
          file: 'rating/examples_style/RatingDemo_2',
        },
        {
          title: 'Customising borders',
          description: 'You can change the border width of star by passing a value in the <span>border-width</span> prop, you can also use the rounded variation by setting <span>rounded-corners</span> prop true,',
          file: 'rating/examples_style/RatingDemo_3',
        },
        {
          title: 'Add Glow',
          description: 'You can add glow active star by passing a color in the <span>glow-color</span> prop',
          file: 'rating/examples_style/RatingDemo_4',
        },
        {
          title: 'Advance Styling',
          description: 'You can also use the right to left layout for stars by setting the <span>rtl</span> prop true',
          file: 'rating/examples_style/RatingDemo_5',
        },
      ],
    };
  },
  title: 'Rating',
  description: `Rating component can be used when user wants to provide an option to rate the products/services provided.`,
  packageName: 'rating',
  componentName: 'LvRating',
  status: COMPONENT_STATUS.UPDATED,
  apiData: RatingAPI,
};
</script>
