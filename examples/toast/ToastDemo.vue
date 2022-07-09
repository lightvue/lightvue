<template>
  <div class="lv-demo_layout">
    <LvButton label="Default" class="--mr-4" @click="showDefault" />
    <LvButton label="Info" class="lv--info --mr-4" @click="showInfo" />
    <LvButton label="Success" class="lv--success --mr-4" @click="showSuccess" />
    <LvButton label="Warn" class="lv--warning --mr-4" @click="showWarn" />
    <LvButton label="Error" class="lv--danger --mr-4" @click="showError" />
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
