<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template #title-right> </template>
    <docs-card-vue title="Basic" file="upload/UploadDemo" overflow />
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
import UploadAPI from 'lightvueDocs/example/upload/UploadApi';
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
        content: 'upload Documentation | LightVue',
      },
      {
        property: 'og:description',
        content: 'upload component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.',
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
  title: 'Upload',
  description: `The LvBadge component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.`,
  packageName: 'upload',
  componentName: 'LvUpload',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: UploadAPI,
};
</script>
