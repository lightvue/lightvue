<template>
  <div class="">
    <div class="content-section implementation" style="min-height: calc(100vh - 260px)">
      <div class="content-header">
        <div
          class="demo-tab"
          :class="{ active: demoTab === 'installation' }"
          @click="demoTab = 'installation'"
        >
          Installation
        </div>
        <div
          class="demo-tab"
          :class="{ active: demoTab === 'icons' }"
          @click="demoTab = 'icons'"
        >
          Icons
        </div>
      </div>
      <div v-show="demoTab === 'installation'">
        <slot></slot>
      </div>
      <div v-show="demoTab === 'icons'">
        <slot name="icons"></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      demoTab: "installation", //'icons'
    };
  },
};
</script>

<style lang="scss">
.content-header {
  display: flex;
  max-width: 1290px; 
  margin: 5rem auto;
  margin-bottom: 0px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  .demo-tab {
    width: 50%;
    text-align: center;
    padding: 0.8rem 0;
    cursor: pointer;
    user-select: none;

    background-color: #ffffff;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: #edf2f6;
    }
    &.active {
      background-color: #607c8a;
      color: #fff;
    }
  }
}
</style>
