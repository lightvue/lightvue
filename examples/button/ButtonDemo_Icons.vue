<template>
  <div class="lv-demo_layout">
    <LvButton icon="light-icon-alert-circle" class="lv--primary" />
    <LvButton label="Submit" icon="light-icon-arrow-down-circle" class="lv--primary" />
    <LvButton label="Submit" icon-right="light-icon-arrow-down-circle" class="lv--primary" />
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
