<template>
  <div class="shimmer-demo-wrapper">
    <h5>CardList</h5>
    <div><lv-card-list :width="355" /></div>
    <div><lv-card-list :width="355" primaryColor="#607c8a" secondaryColor="#8aa6b5" /></div>
    <div><lv-card-list :width="355" primaryColor="#38b2ac" secondaryColor="#47d9d1" /></div>
    <h5>CodeLoader</h5>
    <div><lv-code-loader :width="300" /></div>
    <div><lv-code-loader :width="300" primaryColor="#607c8a" secondaryColor="#8aa6b5" /></div>
    <div><lv-code-loader :width="300" primaryColor="#38b2ac" secondaryColor="#47d9d1" /></div>
    <h5>ListLoader</h5>
    <div><lv-list-loader :width="300" :height="100" /></div>
    <div><lv-list-loader :width="300" :height="100" primaryColor="#607c8a" secondaryColor="#8aa6b5" /></div>
    <div><lv-list-loader :width="300" :height="100" primaryColor="#38b2ac" secondaryColor="#47d9d1" /></div>
  </div>
</template>

<script>
import LvCardList from '@/collections/skeleton/preset/CardList';
import LvCodeLoader from '@/collections/skeleton/preset/CodeLoader';
import LvListLoader from '@/collections/skeleton/preset/ListLoader';

export default {
  data() {
    return {};
  },
  components: {
    LvCardList,
    LvCodeLoader,
    LvListLoader,
  },
};
</script>

<style>
.shimmer-demo-wrapper > div {
  width: 350px;
  margin: 30px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: inline-block;
}
</style>
