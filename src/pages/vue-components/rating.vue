<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <!-- <docs-card-vue title="Modifying Options" file="examples/rating/examples/RatingDemo_Options" /> -->
    <!-- <docs-card-vue title="Modifying style" file="examples/rating/examples/RatingDemo_Styling" /> -->
    <docs-card-vue title="Modifying increment" file="examples/rating/examples_options/RatingDemo_1" />
    <docs-card-vue title="Modifying basic parameters" file="examples/rating/examples_options/RatingDemo_2" />
    <docs-card-vue title="Specifying number of stars" file="examples/rating/examples_options/RatingDemo_3" />
    <docs-card-vue title="Consuming the data" file="examples/rating/examples_options/RatingDemo_4" />

    <docs-card-vue title="Modifying color" file="examples/rating/examples_style/RatingDemo_1" />
    <docs-card-vue title="Modifying size" file="examples/rating/examples_style/RatingDemo_2" />
    <docs-card-vue title="Customising borders" file="examples/rating/examples_style/RatingDemo_3" />
    <docs-card-vue title="Add glow" file="examples/rating/examples_style/RatingDemo_4" />
    <docs-card-vue title="Advanced styling" file="examples/rating/examples_style/RatingDemo_5" />
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
import RatingAPI from '@/collections/rating/RatingAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Rating',
  description: `Rating component can be used when user wants to provide an option to rate the products/services provided.`,
  packageName: 'rating',
  componentName: 'LvRating',
  apiData: RatingAPI,
};
</script>
