<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status">
    <TyperBestDemo />
    <docs-card-vue title="Basic" file="typer/TyperDemo" overflow />
    <docs-card-vue title="Text styles" file="typer/TyperDemoFont" overflow />
    <docs-card-vue title="speed" file="typer/TyperSpeedDemo" overflow />

    <template #api>
      <getting-started :package-name="$options.packageName" :component-name="$options.componentName" />
      <docs-all-api :api-data="$options.apiData" />
    </template>
  </docs-page-layout>
</template>

<script>
import TyperBestDemo from 'lightvueDocs/example/typer/TyperBestDemo';
import DocsPageLayout from '@/components/docs-card/DocsPageLayout.vue';
import DocsCardVue from '@/components/docs-card/DocsCardVue.vue';
import DocsCard from '@/components/docs-card/DocsCard.vue';
import GettingStarted from '@/components/docs-card/GettingStarted.vue';
import DocsAllApi from '@/components/docs-card/DocsAllApi.vue';
import TyperAPI from 'lightvueDocs/example/typer/TyperAPI';
import { COMPONENT_STATUS } from '@/static/data/constant.ts';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
    TyperBestDemo,
  },
  title: 'Typer',
  description: `Collapsible component easily toggles visibility of almost any content on your pages in a vertically and horizontally collapsing container`,
  packageName: 'typer',
  componentName: 'LvTyper',
  status: COMPONENT_STATUS.NEW,
  apiData: TyperAPI,
};
</script>
