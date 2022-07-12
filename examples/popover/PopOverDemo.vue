<template>
  <div class="lv-demo_layout">
    <LvPopOver :offset="10" placement="top">
      <template #anchor>
        <LvButton label="Top" class="lv--primary" />
      </template>
      <LvButton label="Submit" class="lv--primary" />
    </LvPopOver>
    <LvPopOver :offset="10" placement="Bottom">
      <template #anchor>
        <LvButton label="bottom" class="lv--primary" />
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
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.d-flex {
  width: auto;
  display: flex;
  justify-content: space-between;
}
</style>
