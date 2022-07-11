<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template #title-right> </template>

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
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import BadgeAPI from 'lightvueDocs/example/badge/BadgeApi';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' Badge Documentation | LightVue ',
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
        content: 'Badge component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.',
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
  },
  data() {
    return {
      demos: [
        {
          title: 'Basic',
          file: 'badge/BadgeDemo',
          description: 'LightVue comes with some stunning designs for badge.There are different types of badge present in lightVue you can go through this page for more info.You can change the color of badge by passing value in <span>color</span> prop. LightVue Badge is Both compatible with Vue 2.x and Vue 3.x',
        },
      ],
    };
  },

  title: 'Badge',
  description: `The LvBadge component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.`,
  packageName: 'badge',
  componentName: 'LvBadge',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: BadgeAPI,
};
</script>
