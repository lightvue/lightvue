<template>
  <div class="lv-demo_layout">
    <!--------------------- Top PopOver  ------------------------->
    <LvPopOver :offset="10" placement="top" backgroundColor="#fff">
      <template #anchor> A <u style="cursor: pointer">LvPopover</u> is an attribute in LightVue that can be used to make any website look more dynamic. </template>

      <div>
        <img src="/logo_v2.svg" class="header-logo" />
      </div>
      <div style="text-align: center">
        <p>Know More about <a href="https://lightvue.org/">Lightvue</a></p>
      </div>
      <div>
        <LvButton style="width: 80px" label="Back" class="lv--primary" disabled />
        <LvButton style="width: 80px" label="Next" class="lv--primary" />
      </div>
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
</style>
