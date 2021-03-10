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
// import Toast from 'lightvue/toast/Toast.vue';
export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
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
      this.$toast.add({ type: 'info', title: 'Info Message', content: 'Message Content', group: 'top', duration: 3000 });
    },
    showBottom() {
      this.$toast.add({ type: 'warn', title: 'Warn Message', content: 'Message Content', group: 'bottom', duration: 3000 });
    },
    showSticky() {
      this.$toast.add({ type: 'info', title: 'Sticky Message', content: 'Message Content' });
    },
    showMultiple() {
      this.$toast.add({ type: 'info', title: 'Message 1', content: 'Message 1 Content', duration: 3000 });
      this.$toast.add({ type: 'info', title: 'Message 2', content: 'Message 2 Content', duration: 3000 });
      this.$toast.add({ type: 'info', title: 'Message 3', content: 'Message 3 Content', duration: 3000 });
    },
    clear() {
      this.$toast.removeAllGroups();
    },
  },
  // components: {
  //   Toast,
  // },
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
