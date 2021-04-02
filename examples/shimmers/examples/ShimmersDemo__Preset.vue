<template>
  <div class="shimmer-demo-wrapper shimmer-demo-wrapper--preset">
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
    <!-- REFACTORING -->
  </div>
</template>

<script>
import LvCardList from 'lightvue/skeleton/preset/CardList';
import LvCodeLoader from 'lightvue/skeleton/preset/CodeLoader';
import LvListLoader from 'lightvue/skeleton/preset/ListLoader';

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
  width: min-content;
  margin: 30px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: inline-block;
}

@media (max-width: 500px) {
  .shimmer-demo-wrapper > div:nth-child(2) {
    width: 250px;
    margin-left: 0;
    margin-right: 0;
    transform: scaleX(0.7);
  }
  .shimmer-demo-wrapper > div:nth-child(3) {
    width: 250px;
    margin-left: 0;
    margin-right: 0;
    transform: scaleX(0.7);
  }
  .shimmer-demo-wrapper > div:nth-child(4) {
    width: 250px;
    margin-left: 0;
    margin-right: 0;
    transform: scaleX(0.7);
  }
}

@media (max-width: 500px) {
  .shimmer-demo-wrapper {
    margin-left: 0;
    margin-right: 0;
  }

  .shimmer-demo-wrapper > div {
    margin-left: 0;
    margin-right: 0;
  }

  .shimmer-demo-wrapper--preset {
    margin-left: 0 !important;
  }
}
</style>
