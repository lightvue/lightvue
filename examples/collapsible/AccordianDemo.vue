<template>
  <div>
    <div class="nav-list__category-wrap">
      <div class="collapsible_catgory" @click="open1" :class="{ active: isOpenA == true }">
        <div class="nav-list__category-label">
          <i class="light-icon-adjustments"></i>
          What is lightVue
        </div>
        <i :class="isOpenA ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
      </div>
      <LvCollapsible>
        <div v-show="isOpenA" class="collapisible--answer" key="1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quasi ab blanditiis, iure consectetur, eius rerum vitae ipsa doloremque beatae sapiente? Alias ea atque sint excepturi. Possimus consequatur distinctio sequi.</p>
        </div>
      </LvCollapsible>
    </div>
    <div class="nav-list__category-wrap">
      <div class="collapsible_catgory" @click="open2" :class="{ active: isOpenB == true }">
        <div class="nav-list__category-label">
          <i class="light-icon-adjustments"></i>
          How to install lightVue
        </div>
        <i :class="isOpenB ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
      </div>
      <LvCollapsible>
        <div v-show="isOpenB" class="collapisible--answer" key="1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quasi ab blanditiis, iure consectetur, eius rerum vitae ipsa doloremque beatae sapiente? Alias ea atque sint excepturi. Possimus consequatur distinctio sequi.</p>
        </div>
      </LvCollapsible>
    </div>
    <div class="nav-list__category-wrap">
      <div class="collapsible_catgory" @click="open3" :class="{ active: isOpenC == true }">
        <div class="nav-list__category-label">
          <i class="light-icon-adjustments"></i>
          Is lightvue compatible for both vue2 and vue3
        </div>
        <i :class="isOpenC ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
      </div>
      <LvCollapsible>
        <div v-show="isOpenC" class="collapisible--answer" key="1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quasi ab blanditiis, iure consectetur, eius rerum vitae ipsa doloremque beatae sapiente? Alias ea atque sint excepturi. Possimus consequatur distinctio sequi.</p>
        </div>
      </LvCollapsible>
    </div>
  </div>
</template>
<script>
import LvCollapsible from 'lightvue/collapsible-component';
export default {
  components: {
    LvCollapsible,
  },
  data() {
    return {
      isOpenA: false,
      isOpenB: false,
      isOpenC: false,
    };
  },
  methods: {
    open1() {
      this.isOpenA = !this.isOpenA;
      this.isOpenB = false;
      this.isOpenC = false;
    },
    open2() {
      this.isOpenB = !this.isOpenB;
      this.isOpenA = false;
      this.isOpenC = false;
    },
    open3() {
      this.isOpenC = !this.isOpenC;
      this.isOpenA = false;
      this.isOpenB = false;
    },
  },
};
</script>
<style lang="scss"></style>
