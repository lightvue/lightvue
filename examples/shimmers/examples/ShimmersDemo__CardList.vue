<template>
  <div class="lv-demo_layout">
    <lv-card-list :width="300" />

    <lv-card-list :width="300" primaryColor="#607c8a" secondaryColor="#8aa6b5" />
  </div>
</template>

<script>
import LvCardList from 'lightvue/skeleton/preset/CardList.vue';
export default {
  components: {
    LvCardList,
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
