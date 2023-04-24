<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <template #title-right> </template>
    <docs-card-vue title="Basic" file="upload/UploadButtonDemo" overflow />
    <docs-card-vue title="Light Upload" file="upload/UploadDemo" overflow />
    <docs-card-vue title="Drop" file="upload/UploadDragDemo" overflow />
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
import UploadAPI from 'lightvueDocs/example/upload/UploadApi';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: ' LvUpload Documentation | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'LvUpload Documentation | LightVue',
      },
      {
        property: 'og:description',
        content: 'LightVue supplies a way for you to upload files through the LvUpload component .',
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
  description: `LightVue supplies a way for you to upload files through the LvUpload component.`,
  packageName: 'upload',
  componentName: 'LvUpload',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: UploadAPI,
};
</script>
