<template>
  <div>
    <div class="content-section implementation">
      <div class="card">
        <h5>Basic</h5>
        <LvButton label="Show" icon="light-icon-external-link" @click="openBasic" class="lv-button" />
        <LvDialog header="Header" :visible.sync="displayBasic" :style="{ width: '50vw' }">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <template #footer>
            <LvButton label="No" icon="light-icon-x" @click="closeBasic" class="lv-button --text-button" />
            <LvButton label="Yes" icon="light-icon-check" @click="closeBasic" autofocus />
          </template>
        </LvDialog>

        <LvButton class="lv-button" label="Long Content" icon="light-icon-external-link" @click="openBasic2" />
        <LvDialog header="Header" :visible.sync="displayBasic2" :style="{ width: '50vw' }">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <template #footer>
            <Button label="No" icon="light-icon-x" @click="closeBasic2" class="--text-button lv-button" />
            <Button label="Yes" icon="light-icon-check" @click="closeBasic2" class="lv-button" autofocus />
          </template>
        </LvDialog>

        <h5>Modal</h5>
        <LvButton label="Show" icon="light-icon-external-link" class="lv-button" @click="openModal" />
        <LvDialog header="Header" :visible.sync="displayModal" :style="{ width: '50vw' }" :modal="true">
          <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <template #footer>
            <Button label="No" icon="light-icon-x" @click="closeModal" class="--text-button" />
            <Button label="Yes" icon="light-icon-check" @click="closeModal" autofocus />
          </template>
        </LvDialog>

        <h5>Confirmation</h5>
        <LvButton label="Confirm" icon="light-icon-external-link" @click="openConfirmation" />
        <LvDialog header="Confirmation" :visible.sync="displayConfirmation" :style="{ width: '350px' }" :modal="true">
          <div class="confirmation-content">
            <i class="light-icon-alert-triangle p-mr-3" style="font-size: 2rem" />
            <span>Are you sure you want to proceed?</span>
          </div>
          <template #footer>
            <Button label="No" icon="light-icon-x" @click="closeConfirmation" class="--text-button" />
            <Button label="Yes" icon="light-icon-check" @click="closeConfirmation" class="--text-button" autofocus />
          </template>
        </LvDialog>

        <h5>Maximizable</h5>
        <LvButton label="Show" icon="light-icon-external-link" @click="openMaximizable" />
        <LvDialog header="Header" :visible.sync="displayMaximizable" :style="{ width: '50vw' }" :maximizable="true" :modal="true">
          <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <template #footer>
            <Button label="No" icon="light-icon-x" @click="closeMaximizable" class="lv-button --text-button" />
            <Button label="Yes" icon="light-icon-check" @click="closeMaximizable" autofocus />
          </template>
        </LvDialog>

        <h5>Position</h5>
        <div class="p-grid p-dir-col">
          <div class="p-col">
            <LvButton label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" class="lv--warning lv-button" />
            <LvButton label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" class="lv--warning lv-button" />
          </div>
          <div class="p-col">
            <LvButton label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" class="lv--warning lv-button" />
            <Button label="TopLeft" icon="pi pi-arrow-down" @click="openPosition('topleft')" class="lv--warning lv-button" />
            <LvButton label="TopRight" icon="pi pi-arrow-down" @click="openPosition('topright')" class="lv--warning lv-button" />
          </div>
          <div class="p-col">
            <LvButton label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" class="lv--warning lv-button" />
            <LvButton label="BottomLeft" icon="pi pi-arrow-up" @click="openPosition('bottomleft')" class="lv--warning lv-button" />
            <LvButton label="BottomRight" icon="pi pi-arrow-up" @click="openPosition('bottomright')" class="lv--warning lv-button" />
          </div>
        </div>

        <LvDialog header="Header" :visible.sync="displayPosition" :style="{ width: '50vw' }" :position="position" :modal="true">
          <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <template #footer>
            <LvButton label="No" icon="light-icon-x" @click="closePosition" class="lv-button --text-button" />
            <LvButton label="Yes" icon="light-icon-check" @click="closePosition" autofocus class="lv-button" />
          </template>
        </LvDialog>
      </div>
    </div>
  </div>
</template>

<script>
import LvDialog from '@/collections/dialog/Dialog.vue';

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
</style>
