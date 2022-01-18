<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template #title-right> </template>
    <animation-best-demo />
    <docs-card-vue title="Basic" file="animations/AnimationDemo" overflow />
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
import BadgeAPI from 'lightvueDocs/example/badge/BadgeApi';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';
import AnimationBestDemo from "lightvueDocs/example/animations/AnimationBestDemo.vue"

export default {
  head: {
    title: ' Animations Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'Badge Documentation | LightVue',
      },
      {
        property: 'og:description',
        content: 'Add animations and transitions to your components.',
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
    AnimationBestDemo
},
  title: 'Animations',
  description: `Add animations and transitions to your components`,
  packageName: 'animate',
  componentName: 'LvAnimate',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: BadgeAPI,
};
</script>
