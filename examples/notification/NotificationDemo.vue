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
        <LvButton label="Top Left" class="p-mr-2" @click="showTopLeft" />
        <LvButton label="Bottom Left" class="lv--warning" @click="showBottomLeft" />
        <LvButton label="Bottom Right" class="lv--danger" @click="showBottomRight" />

        <h5>Options</h5>
        <LvButton @click="showMultiple" label="Multiple" class="lv--warning" />
        <LvButton @click="showSticky" label="Sticky" />

        <h5>Remove All</h5>
        <LvButton @click="clear" label="Clear" />
      </div>
    </div>

    <!-- <ToastDoc/> -->
  </div>
</template>

<script>
// import ToastDoc from './ToastDoc';

export default {
  data() {
    return {
      messages: [],
    };
  },
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
      this.$notification.add({ type: 'info', title: 'Info Message', content: 'Message Content', group: 'tl', duration: 3000 });
    },
    showBottomLeft() {
      this.$notification.add({ type: 'warn', title: 'Warn Message', content: 'Message Content', group: 'bl', duration: 3000 });
    },
    showBottomRight() {
      this.$notification.add({ type: 'success', title: 'Success Message', content: 'Message Content', group: 'br', duration: 3000 });
    },
    showSticky() {
      this.$notification.add({ type: 'info', title: 'Sticky Message', content: 'Message Content' });
    },
    showMultiple() {
      this.$notification.add({ type: 'info', title: 'Message 1', content: 'Message 1 Content', duration: 3000 });
      this.$notification.add({ type: 'info', title: 'Message 2', content: 'Message 2 Content', duration: 3000 });
      this.$notification.add({ type: 'info', title: 'Message 3', content: 'Message 3 Content', duration: 3000 });
    },
    clear() {
      this.$notification.removeAllGroups();
    },
  },
  // components: {
  //     'ToastDoc': ToastDoc
  // }
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
