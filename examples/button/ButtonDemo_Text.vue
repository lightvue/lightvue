<template>
  <div class="lv-demo_layout">
    <LvButton label="Primary" class="--text-button lv--primary" />
    <LvButton label="Secondary" class="lv--secondary --text-button" />
    <LvButton label="Success" class="lv--success --text-button" />
    <LvButton label="Info" class="lv--info --text-button" />
    <LvButton label="Warning" class="lv--warning --text-button" />
    <LvButton label="Help" class="lv--help --text-button" />
    <LvButton label="Danger" class="lv--danger --text-button" />
    <LvButton label="Plain" class="--text-button lv--plain" />
    <LvButton label="Complementary" class="--text-button lv--complementary" />
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
