<template>
  <div class="icons-docs-page">
    <div class="content-wrapper">
      <light-icons-header />
      <light-icons-navbar />
      <light-icons-documentation v-if="$route.hash === '#docs'" />
      <light-icons-display v-else />
    </div>
  </div>
</template>
<script>
import LightIconsHeader from '@/components/light-icons/LightIconsHeader';
import LightIconsNavbar from '@/components/light-icons/LightIconsNavbar.vue';
import LightIconsDocumentation from '@/components/light-icons/LightIconsDocumentation.vue';
import LightIconsDisplay from '@/components/light-icons/LightIconsDisplay.vue';

export default {
  components: { LightIconsHeader, LightIconsNavbar, LightIconsDocumentation, LightIconsDisplay },
};
</script>
<style>
.icons-docs-page {
  background: #f5f8fa;
  padding: 100px 0 0;
}
.content-wrapper {
  max-width: 1180px;
  margin: auto;
}
</style>
