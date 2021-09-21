<template>
  <docs-page-layout :title="$options.title" :description="$options.description" :status="$options.status" :badge="$options.badge">
    <docs-card-vue title="Basic" file="badge/BadgeDemo" overflow />
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

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi,
  },
  title: 'Badge',
  description: `The LvBadge component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.`,
  packageName: 'badge',
  componentName: 'LvBadge',
  status: 'Under-development',
  badge: 'lv--warning',
  apiData: BadgeAPI,
};
</script>
