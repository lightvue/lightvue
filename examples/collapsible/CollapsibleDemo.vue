<template>
  <div>
    <div class="nav-list__category-wrap">
      <div class="collapsible_catgory" @click="open1" :class="{ active: isOpenA == true }">
        <div class="nav-list__category-label">
          <i class="light-icon-clipboard"></i>
          Form Elements
        </div>
        <i :class="isOpenA ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
      </div>
      <LvCollapsible>
        <div class="nav-list__category-wrap" v-show="isOpenA" key="25">
          <div class="collapsible_catgory" @click="isOpenB = !isOpenB" :class="{ active: isOpenB == true }">
            <div class="nav-list__category-label">
              <i class="light-icon-directions"></i>
              Input
            </div>
            <i :class="isOpenB ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
          </div>
          <LvCollapsible>
            <div class="collapsible__category-items" v-show="isOpenB" key="1">
              <div class="nav-list__category-item --link">
                <div class="nav-list__item-line"></div>
                <div class="nav-list__item-bullet"></div>
                <div class="nac-list__item-label">Number</div>
              </div>
              <div class="nav-list__category-item --link">
                <div class="nav-list__item-line"></div>
                <div class="nav-list__item-bullet"></div>
                <div class="nac-list__item-label">Text Area</div>
              </div>
              <div class="nav-list__category-item --link">
                <div class="nav-list__item-line"></div>
                <div class="nav-list__item-bullet"></div>
                <div class="nac-list__item-label">Checkbox</div>
              </div>
              <div class="nav-list__category-item --link">
                <div class="nav-list__item-line"></div>
                <div class="nav-list__item-bullet"></div>
                <div class="nac-list__item-label">Radio</div>
              </div>
              <div class="nav-list__category-item --link">
                <div class="nav-list__item-line"></div>
                <div class="nav-list__item-bullet"></div>
                <div class="nac-list__item-label">Button</div>
              </div>
            </div>
          </LvCollapsible>
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
  },
};
</script>
<style lang="scss"></style>
