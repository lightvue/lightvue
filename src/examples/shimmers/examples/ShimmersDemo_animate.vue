<template>
    <div>
      <div class='shimmer-demo-wrapper'>
      <h5>PROP: animate (default: true)</h5>
        <lv-skeleton :width='300' :height='10' primaryColor="#607c8a" secondaryColor="#8aa6b5"/> <br />
        <lv-skeleton :width='300' :height='10' primaryColor="#607c8a" secondaryColor="#8aa6b5"/> <br />
        <lv-skeleton :width='300' :height='10' primaryColor="#607c8a" secondaryColor="#8aa6b5"/> <br />
      </div>
      <div class='shimmer-demo-wrapper'>
      <h5>animate = false</h5>
        <lv-skeleton :animate="false" :width='300' :height='10' primaryColor="#607c8a" secondaryColor="#8aa6b5"/> <br />
        <lv-skeleton :animate="false" :width='300' :height='10' primaryColor="#607c8a" secondaryColor="#8aa6b5"/> <br />
        <lv-skeleton :animate="false" :width='300' :height='10' primaryColor="#607c8a" secondaryColor="#8aa6b5"/> <br />
      </div>
    </div>
</template>

<script>
export default {
 data() {
   return {}
 }
};
</script>

<style scoped>
.shimmer-demo-wrapper {
  margin: 30px;
  height: max-content;
  width: 350px;
  display: inline-block;
}
</style>
