<template>
  <div class="light-icons__wrapper">
    <light-icons-header />
    <light-icons-page-layout :title="$options.title" :description="$options.description">
      <installation />
      <template #icons>
        <icons />
      </template>
    </light-icons-page-layout>
    <light-icons-footer />
  </div>
</template>

<script>
import '@/collections/light-icons/light-icon.css';
import LightIconsPageLayout from '@/components/docs-card/LightIconsPageLayout';
import Icons from '@/examples/light-icons/Icons';
import Installation from '@/examples/light-icons/Installation';
import LightIconsHeader from '@/components/light-icons/LightIconsHeader';
import LightIconsFooter from '@/components/light-icons/LightIconsFooter';

export default {
  components: { LightIconsPageLayout, Installation, Icons, LightIconsHeader, LightIconsFooter },
};
</script>

<style scoped>
.light-icons__wrapper {
  background: #f5f8fa;
  padding: 100px 0;
}
</style>
