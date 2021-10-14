<template>
  <div class="test-content">
    <LvPopOver :offset="20" placement="bottom">
      <LvButton label="Bottom" class="lv--primary" slot="popover" />
      <LvButton label="Submit" class="lv--primary" />
    </LvPopOver>
    <LvPopOver :offset="20" placement="top">
      <LvButton label="Top" class="lv--primary" slot="popover" />
      <LvButton label="Submit" class="lv--primary" />
    </LvPopOver>
    <LvPopOver :offset="20" placement="right">
      <LvButton label="Right" class="lv--primary" slot="popover" />
      <LvButton label="Submit" class="lv--primary" />
    </LvPopOver>
    <LvPopOver :offset="20" placement="left">
      <LvButton label="Left" class="lv--primary" slot="popover" />
      <div class="d-flex">
        <lv-input type="text" v-model="value1" label="First Name" placeholder="Enter your first name" />
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
