<template>
  <div class="lv-demo_layout">
    <LvButton label="Primary" class="lv--primary" />
    <LvButton label="Secondary" class="lv--secondary" />
    <LvButton label="Success" class="lv--success" />
    <LvButton label="Info" class="lv--info" />
    <LvButton label="Warning" class="lv--warning" />
    <LvButton label="Help" class="lv--help" />
    <LvButton label="Danger" class="lv--danger" />
    <LvButton label="Cancel" class="lv--complementary" />
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
<style scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
