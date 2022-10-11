<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template v-for="(demo, i) in demos">
      <docs-card-vue :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    </template>

    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <!-- <docs-all-api :api-data="$options.apiData" /> -->
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
// import RippleAPI from 'lightvueDocs/example/ripple/RippleAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Ripple Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' Ripple Docs | LightVue ',
      },
      {
        property: 'og:description',
        content: ' ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic usage',
          file: 'ripple/RippleBasicDemo',
          description: 'You can use the ripple custom directive <span>v-ripple</span> for creating material effect. LightVue Ripple bar is Both compatible with Vue 2.x and Vue 3.x.',
        },
        {
          title: 'Modifying color',
          file: 'ripple/RippleColorDemo',
          description: 'you can set the color of repple by overwriting a <span>lv-ink</span> class.',
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
  },
  title: 'Ripple effect',
  description: `Add a material ripple effect on click, to any DOM element/Vue component.`,
  packageName: 'ripple',
  componentName: 'Ripple',
  status: COMPONENT_STATUS.BETA,
  // apiData: RippleAPI,
  // apiData: {},
};
</script>
