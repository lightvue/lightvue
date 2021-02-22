<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Demo" file="examples/input-toggle-switch/ToggleSwitchDemo_Basic" />
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
import ToggleSwitchAPI from 'lightvue/input-toggle/ToggleSwitchAPI';

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Toggle Switch',
  description: `ToggleSwitch is used to select a boolean value.`,
  packageName: 'toggle-switch',
  componentName: 'LvToggleSwitch',
  apiData: ToggleSwitchAPI,
};
</script>
