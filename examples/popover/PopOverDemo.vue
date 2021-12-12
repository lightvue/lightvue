0
<template>
  <div class="test-content">
    <LvButton label="ToggleVis" @click.stop="toggleVisibility" />

    <LvPopOver :offset="10" placement="top" v-model="visibility" target=".header-logo">
      <LvButton label="Bottom" class="lv--primary" />
    </LvPopOver>
    <LvPopOver :offset="10" placement="top">
      <template #anchor>
        <LvButton label="Top" class="lv--primary" />
      </template>
      <LvButton label="Submit" class="lv--primary" />
    </LvPopOver>
    <LvPopOver :offset="10" placement="left" :isVisible="visibility">
      <template #anchor>
        <LvButton label="Left" class="lv--primary" />
      </template>
      <div class="d-flex">
        <lv-input type="text" label="First Name" placeholder="Enter your first name" />
      </div>
    </LvPopOver>
    <LvPopOver :offset="10" placement="right">
      <template #anchor>
        <LvButton label="Right" class="lv--primary" />
      </template>
      <LvButton label="Submit" class="lv--primary" />
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
      console.log(this.visibility, 'Changed');
      this.visibility = !this.visibility;

      // debugger;
    },
  },
};
</script>
<style lang="scss" scoped>
.test-content {
  display: flex;
  justify-content: space-around;
}

.d-flex {
  width: auto;
  display: flex;
  justify-content: space-between;
}

.show-from-bottom-enter-active,
.show-from-bottom-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.show-from-bottom-enter,
.show-from-bottom-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

// Show from left transition

.show-from-left-enter-active,
.show-from-left-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.show-from-left-enter,
.show-from-left-leave-to {
  opacity: 0;
  transform: translate(-20px);
}

// Show from right transition

.show-from-right-enter-active,
.show-from-right-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.show-from-right-enter,
.show-from-right-leave-to {
  opacity: 0;
  transform: translate(20px);
}
</style>
