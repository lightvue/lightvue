<template>
  <div>
    <h5>Variants</h5>
    <LvButton label="Default" class="--mr-4" @click="showSuccess" />
    <LvButton label="Info" class="lv--info --mr-4" @click="showInfo" />
    <LvButton label="Warn" class="lv--warning --mr-4" @click="showWarn" />
    <LvButton label="Error" class="lv--danger --mr-4" @click="showError" />

    <h5>Positions</h5>
    <LvButton label="Top Left" class="--mr-4" @click="showTopLeft" />
    <LvButton label="Bottom Left" class="lv--warning --mr-4" @click="showBottomLeft" />
    <LvButton label="Bottom Right" class="lv--danger --mr-4" @click="showBottomRight" />

    <h5>Options</h5>
    <LvButton @click="showMultiple" label="Multiple" class="lv--warning --mr-4" />
    <LvButton @click="showSticky" label="Sticky" />

    <h5>Remove All</h5>
    <LvButton @click="clear" label="Clear" />
  </div>
</template>

<script>
export default {
  methods: {
    showSuccess() {
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', duration: 30000 });
    },
    showInfo() {
      this.$notification.add({ type: 'info', title: 'Info Message', content: 'Message Content', duration: 3000 });
    },
    showWarn() {
      this.$notification.add({ type: 'warn', title: 'Warn Message', content: 'Message Content', duration: 3000 });
    },
    showError() {
      this.$notification.add({ type: 'error', title: 'Error Message', content: 'Message Content', duration: 3000 });
    },
    showTopLeft() {
      this.$notification.add({ type: 'info', title: 'Info Message', content: 'Message Content', position: 'top-left', duration: 3000 });
    },
    showBottomLeft() {
      this.$notification.add({ type: 'warn', title: 'Warn Message', content: 'Message Content', position: 'bottom-left', duration: 3000 });
    },
    showBottomRight() {
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', position: 'bottom-right', duration: 3000 });
    },
    showSticky() {
      this.$notification.add({ title: 'Sticky Message', content: 'Message Content' });
    },
    showMultiple() {
      this.$notification.add({ type: 'info', title: 'Message 1', content: 'Message 1 Content', duration: 3000 });
      this.$notification.add({ type: 'warn', title: 'Message 2', content: 'Message 2 Content', duration: 3000 });
      this.$notification.add({ type: 'error', title: 'Message 3', content: 'Message 3 Content', duration: 3000 });
    },
    clear() {
      this.$notification.removeAllGroups();
    },
  },
};
</script>
<style lang="scss">
.--mr-4 {
  margin-right: 8px;
  margin-top: 3px;
}
</style>
