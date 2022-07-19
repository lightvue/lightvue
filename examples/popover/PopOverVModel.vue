<template>
  <div class="lv-demo_layout">
    <LvPopOver :offset="10" placement="bottom" target=".header-logo">
      <template #anchor>
        <LvButton label="test" class="lv--primary" />
      </template>
      <div style="width: 200px">The Emerging UI Component Library Designed for Vue 3.x & Vue 2.x</div>
      <br />
      <div style="text-align: center">
        <a href="https://lightvue.org/" target="_blank"><LvButton label="Know more" class="lv--primary" /></a>
      </div>
    </LvPopOver>
    <LvButton label="V-Model" @click.stop="toggleVisibility" />
    <LvPopOver :offset="10" placement="right" v-model="visibility" target=".nav-list__category">
      <p>In order to get started with light vue, you need to install LightVue and its dependency LightIcon (Only required if the icons are getting used).</p>
      <LvButton label="Next" class="lv--primary" />
    </LvPopOver>
  </div>
</template>

<script>
import LvPopOver from 'lightvue/popover';
export default {
  components: {
    LvPopOver,
  },
  data() {
    return {
      visibility: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
  },
};
</script>
<style lang="scss" scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
