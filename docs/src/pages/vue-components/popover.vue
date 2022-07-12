<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" hasDocs>
    <docs-card-vue v-for="demo in $options.demoList" :key="demo.id" :title="demo.title" :description="demo.description" :file="demo.file" :id="demo.id" />
    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from '@/components/docs-card/DocsPageLayout';
import DocsCardVue from '@/components/docs-card/DocsCardVue';
import DocsCard from '@/components/docs-card/DocsCard';
import GettingStarted from '@/components/docs-card/GettingStarted';
import DocsAllApi from '@/components/docs-card/DocsAllApi';
import PopOverAPI from 'lightvueDocs/example/popover/PopOverAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  head: {
    title: 'LightVue | Dialog ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'LightVue | Dialog',
      },
      {
        property: 'og:description',
        content: 'LightVue Dialog helps the user to have modal and additional dialog box with their data.',
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
  title: 'PopOver',
  description: ``,
  packageName: 'popover',
  componentName: 'LvPopOver',
  status: COMPONENT_STATUS.UNDER_DEVELOPMENT,
  apiData: PopOverAPI,
  demoList: [
    {
      id: 'basic-usage',
      title: 'Basic usage',
      file: 'popover/PopOverDemo',
      description: '',
    },
    {
      id: 'popover-hover',
      title: 'On Hover',
      file: 'popover/PopOverHoverDemo',
      description: '',
    },
    {
      id: 'popover-model-value',
      title: 'External Target',
      file: 'popover/PopOverVModel',
      description: '',
    },
  ],
};
</script>
