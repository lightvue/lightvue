<template>
  <div>
    <div class="content-section implementation">
      <div class="card">
        <h5>Severities</h5>
        <LvButton label="Default" @click="showSuccess" />
        <LvButton label="Info" class="lv--info" @click="showInfo" />
        <LvButton label="Warn" class="lv--warning" @click="showWarn" />
        <LvButton label="Error" class="lv--danger" @click="showError" />

        <h5>Positions</h5>
        <LvButton label="Top" class="p-mr-2" @click="showTop" />
        <LvButton label="Bottom" class="lv--warning" @click="showBottom" />

        <h5>Options</h5>
        <LvButton @click="showMultiple" label="Multiple" class="lv--warning" />
        <LvButton @click="showSticky" label="Sticky" />

        <h5>Remove All</h5>
        <LvButton @click="clear" label="Clear" />
      </div>
    </div>
  </div>
</template>

<script>
import Toast from 'lightvue/toast/Toast.vue';
export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    showSuccess() {
      this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
    },
    showInfo() {
      this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
    },
    showWarn() {
      this.$toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
    },
    showError() {
      this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
    },
    showTop() {
      this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'top', life: 3000 });
    },
    showBottom() {
      this.$toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bottom', life: 3000 });
    },
    showSticky() {
      this.$toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content' });
    },
    showMultiple() {
      this.$toast.add({ severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 });
      this.$toast.add({ severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 });
      this.$toast.add({ severity: 'info', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 });
    },
    clear() {
      this.$toast.removeAllGroups();
    },
  },
  components: {
    Toast,
  },
};
</script>

<style lang="scss" scoped>
button {
  min-width: 10rem;
  margin-right: 0.5rem;
}

@media screen and (max-width: 960px) {
  button {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>
