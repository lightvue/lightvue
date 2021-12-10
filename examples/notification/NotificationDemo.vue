<template>
  <div>
    <h5>Variants</h5>
    <LvButton label="Success" variant='success' class="--mr-4" @click="showSuccess" />
    <LvButton label="Info" variant='info' class="--mr-4" @click="showInfo" />
    <LvButton label="Warn" variant='warning' class="--mr-4" @click="showWarn" />
    <LvButton label="Error" variant='danger' class="--mr-4" @click="showError" />

    <h5>Positions</h5>
    <LvButton label="Top Left" variant='info' class="--mr-4" @click="showTopLeft" />
    <LvButton label="Bottom Left" variant='warning' class="--mr-4" @click="showBottomLeft" />
    <LvButton label="Bottom Right" variant='success' class="--mr-4" @click="showBottomRight" />

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
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', duration: 3000 });
    },
    showInfo() {
      this.$notification.add({ type: 'info', title: 'Info Message', content: 'Message Content', duration: 3000 });
    },
    showWarn() {
      this.$notification.add({ type: 'warning', title: 'Warn Message', content: 'Message Content', duration: 3000 });
    },
    showError() {
      this.$notification.add({ type: 'danger', title: 'Error Message', content: 'Message Content', duration: 3000 });
    },
    showTopLeft() {
      this.$notification.add({ type: 'info', title: 'Info Message', content: 'Message Content', position: 'top-left', duration: 3000 });
    },
    showBottomLeft() {
      this.$notification.add({ type: 'warning', title: 'Warn Message', content: 'Message Content', position: 'bottom-left', duration: 3000 });
    },
    showBottomRight() {
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', position: 'bottom-right', duration: 3000 });
    },
    showSticky() {
      this.$notification.add({type:'danger', title: 'Sticky Message', content: 'Message Content' });
    },
    showMultiple() {
      this.$notification.add({ type: 'info', title: 'Message 1', content: 'Message 1 Content', duration: 3000 });
      this.$notification.add({ type: 'warning', title: 'Message 2', content: 'Message 2 Content', duration: 3000 });
      this.$notification.add({ type: 'danger', title: 'Message 3', content: 'Message 3 Content', duration: 3000 });
    },
    clear() {
      this.$notification.removeAllGroups();
    },
  },
};
</script>
<style lang="scss" scoped>
.--mr-4 {
  margin-right: 8px;
  margin-top: 3px;
}
</style>
