<template>
  <div>
    <div class="content-section implementation">
      <div class="card">
        <LvButton label="Show" icon="light-icon-external-link" @click="openMaximizable" />
        <LvDialog header="Header" v-model="displayMaximizable" :style="{ width: '50vw' }" :maximizable="true" :modal="true">
          <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <template #footer>
            <LvButton label="No" icon="light-icon-x" @click="closeMaximizable" class="lv-button --text-button" />
            <LvButton label="Yes" icon="light-icon-check" @click="closeMaximizable" autofocus />
          </template>
        </LvDialog>
      </div>
    </div>
  </div>
</template>

<script>
import LvDialog from 'lightvue/dialog';

export default {
  data() {
    return {
      displayBasic: false,
      displayBasic2: false,
      displayModal: false,
      displayConfirmation: false,
      displayMaximizable: false,
      displayPosition: false,
      position: 'center',
    };
  },
  methods: {
    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
    },
    openBasic2() {
      this.displayBasic2 = true;
    },
    closeBasic2() {
      this.displayBasic2 = false;
    },
    openModal() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },
    openConfirmation() {
      this.displayConfirmation = true;
    },
    closeConfirmation() {
      this.displayConfirmation = false;
    },
    openMaximizable() {
      this.displayMaximizable = true;
    },
    closeMaximizable() {
      this.displayMaximizable = false;
    },
    openPosition(position) {
      this.position = position;
      this.displayPosition = true;
    },
    closePosition() {
      this.displayPosition = false;
    },
  },
  components: {
    LvDialog: LvDialog,
  },
};
</script>

<style scoped lang="scss">
.lv-button {
  margin: 0 0.5rem 0 0;
  min-width: 10rem;
}

p {
  margin: 0;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-LvDialog .lv-button {
  min-width: 6rem;
}
.p-col {
  padding: 1rem 0;
}
</style>
