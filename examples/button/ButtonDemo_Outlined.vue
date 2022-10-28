<template>
  <div class="lv-demo_layout">
    <LvButton label="Primary" outlined class="lv--primary" />
    <LvButton label="Secondary" outlined class="lv--secondary" />
    <LvButton label="Success" outlined class="lv--success" />
    <LvButton label="Info" outlined class="lv--info" />
    <LvButton label="Warning" outlined class="lv--warning" />
    <LvButton label="Help" outlined class="lv--help" />
    <LvButton label="Danger" outlined class="lv--danger" />
    <LvButton label="Complementary" outlined class="lv--complementary" />
    <LvButton icon="light-icon-heart" outlined class="lv--danger" />
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
