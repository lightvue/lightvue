<template>
  <div>
    <div class="content-section implementation">
      <div class="card">
        <LvButton label="Confirm" icon="light-icon-external-link" @click="openConfirmation" />
        <LvDialog header="Confirmation" v-model="displayConfirmation" :style="{ width: '350px' }" :modal="true">
          <div class="confirmation-content">
            <i class="light-icon-alert-triangle p-mr-3" style="font-size: 2rem" />
            <span>Are you sure you want to proceed?</span>
          </div>
          <template #footer>
            <LvButton label="No" icon="light-icon-x" @click="closeConfirmation" class="--text-button" />
            <LvButton label="Yes" icon="light-icon-check" @click="closeConfirmation" class="--text-button" autofocus />
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
