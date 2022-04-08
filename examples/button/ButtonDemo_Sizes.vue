<template>
  <div class="lv-demo_layout">
    <LvButton label="Small" size="sm" icon="light-icon-arrow-down-circle" class="lv--primary" />
    <LvButton label="Normal" size="md" icon="light-icon-arrow-down-circle" class="lv--primary" />
    <LvButton label="Large" size="lg" icon="light-icon-arrow-down-circle" class="lv--primary" />
    <LvButton label="Extra Large" size="xl" icon="light-icon-arrow-down-circle" class="lv--primary" />
  </div>
</template>

<script>
import LvButton from 'lightvue/button';
export default {
  components: {
    LvButton,
  },
};
</script>
<style lang="scss" scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
