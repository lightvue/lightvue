<template>
  <div class="lv-demo_layout">
    <LvPopOver :offset="10" placement="bottom" target=".header-logo" backgroundColor="#CEC9C9" maxWidth="200px">
      <template #anchor>
        <LvButton label="test" class="lv--primary" />
      </template>
      <div>The Emerging UI Component Library Designed for Vue 3.x & Vue 2.x</div>
      <br />
      <div style="text-align: center">
        <a href="https://lightvue.org/" target="_blank"><LvButton label="Know more" class="lv--primary" /></a>
      </div>
    </LvPopOver>
    <LvButton label="V-Model" @click.stop="toggleVisibility" />
    <LvPopOver :offset="10" placement="bottom" v-model="visibility" target=".light-icon-chevron-down" maxWidth="200px" backgroundColor="#CEC9C9">
      <p>You can switch between LightVue 3.x & Vue 2.x from here.</p>
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
