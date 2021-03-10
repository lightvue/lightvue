<template>
  <div>
    <h5>Variants</h5>
    <LvButton label="Default" class="--mr-4" @click="showDefault" />
    <LvButton label="Info" class="lv--info --mr-4" @click="showInfo" />
    <LvButton label="Success" class="lv--success --mr-4" @click="showSuccess" />
    <LvButton label="Warn" class="lv--warning --mr-4" @click="showWarn" />
    <LvButton label="Error" class="lv--danger --mr-4" @click="showError" />

    <h5>Positions</h5>
    <LvButton label="Top" class="--mr-4" @click="showTop" />
    <LvButton label="Bottom" class="lv--warning --mr-4" @click="showBottom" />

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
    showDefault() {
      this.$toast.add({ title: 'Default Message', content: 'Message Content', duration: 3000 });
    },
    showSuccess() {
      this.$toast.add({ type: 'success', title: 'Success Message', content: 'Message Content', duration: 3000 });
    },
    showInfo() {
      this.$toast.add({ type: 'info', title: 'Info Message', content: 'Message Content', duration: 3000 });
    },
    showWarn() {
      this.$toast.add({ type: 'warn', title: 'Warn Message', content: 'Message Content', duration: 3000 });
    },
    showError() {
      this.$toast.add({ type: 'error', title: 'Error Message', content: 'Message Content', duration: 3000 });
    },
    showTop() {
      this.$toast.add({ type: 'info', title: 'Info Message', content: 'Message Content', position: 'top', duration: 3000 });
    },
    showBottom() {
      this.$toast.add({ type: 'warn', title: 'Warn Message', content: 'Message Content', position: 'bottom', duration: 3000 });
    },
    showSticky() {
      this.$toast.add({ type: 'info', title: 'Sticky Message', content: 'Message Content' });
    },
    showMultiple() {
      this.$toast.add({ type: 'info', title: 'Message 1', content: 'Message 1 Content', duration: 3000 });
      this.$toast.add({ type: 'warn', title: 'Message 2', content: 'Message 2 Content', duration: 3000 });
      this.$toast.add({ title: 'Message 3', content: 'Message 3 Content', duration: 3000 });
    },
    clear() {
      this.$toast.removeAllGroups();
    },
  },
};
</script>
<style lang="scss">
.--mr-4 {
  margin-right: 8px;
}
</style>
