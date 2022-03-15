<template>
  <div class="skeleton_demo-wrapper">
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
.skeleton_demo-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}
</style>
