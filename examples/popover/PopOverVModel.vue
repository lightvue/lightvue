<template>
  <div class="lv-demo_layout">
    <LvPopOver :offset="10" placement="bottom" target=".header-logo">
      <template #anchor>
        <LvButton label="test" class="lv--primary" />
      </template>
      <LvButton label="Submit" class="lv--primary" />
    </LvPopOver>
    <LvButton label="V-Model" @click.stop="toggleVisibility" />
    <LvPopOver :offset="10" placement="top" v-model="visibility" target=".header-logo">
      <LvButton label="Bottom" class="lv--primary" />
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
