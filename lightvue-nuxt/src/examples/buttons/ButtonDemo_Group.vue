<template>
  <div>
    <h5>Button Set (Single row)</h5>
    <span class="lv-buttonset">
      <LvButton label="Save" icon="pi pi-check" class="lv--primary" />
      <LvButton label="Delete" icon="pi pi-trash" class="lv--danger" />
      <LvButton label="Cancel" icon="pi pi-times" class="lv--secondary" />
    </span>

    <span class="lv-buttonset">
      <LvButton label="Save" size="lg" icon="pi pi-check" class="lv--primary" />
      <LvButton
        label="Delete"
        size="lg"
        icon="pi pi-trash"
        class="lv--danger"
      />
      <LvButton
        label="Cancel"
        size="lg"
        icon="pi pi-times"
        class="lv--secondary"
      />
    </span>

    <span class="lv-buttonset">
      <LvButton label="Save" size="xl" icon="pi pi-check" class="lv--primary" />
      <LvButton
        label="Delete"
        size="xl"
        icon="pi pi-trash"
        class="lv--danger"
      />
      <LvButton
        label="Cancel"
        size="xl"
        icon="pi pi-times"
        class="lv--secondary"
      />
    </span>

    <br />

    <span class="lv-buttonset">
      <LvButton label="Save" icon="pi pi-check" rounded class="lv--primary" />
      <LvButton label="Delete" icon="pi pi-trash" class="lv--danger" rounded />
      <LvButton
        label="Cancel"
        icon="pi pi-times"
        class="lv--secondary"
        rounded
      />
    </span>

    <span class="lv-buttonset">
      <LvButton
        label="Save"
        size="lg"
        icon="pi pi-check"
        rounded
        class="lv--primary"
      />
      <LvButton
        label="Delete"
        size="lg"
        icon="pi pi-trash"
        class="lv--danger"
        rounded
      />
      <LvButton
        label="Cancel"
        size="lg"
        icon="pi pi-times"
        class="lv--secondary"
        rounded
      />
    </span>

    <span class="lv-buttonset">
      <LvButton
        label="Save"
        size="xl"
        icon="pi pi-check"
        rounded
        class="lv--primary"
      />
      <LvButton
        label="Delete"
        size="xl"
        icon="pi pi-trash"
        class="lv--danger"
        rounded
      />
      <LvButton
        label="Cancel"
        size="xl"
        icon="pi pi-times"
        class="lv--secondary"
        rounded
      />
    </span>

    <h5>2D Icon Grids</h5>

    <span class="lv-buttonset">
      <LvButton
        size="xl"
        icon="pi pi-check"
        style="border-radius: 0px"
        class="lv--primary"
      />
      <LvButton
        size="xl"
        icon="pi pi-trash"
        class="lv--danger"
        style="border-radius: 0px"
      />
      <br />
      <LvButton
        size="xl"
        icon="pi pi-search"
        class="lv--warning"
        style="border-radius: 0px"
      />
      <LvButton
        size="xl"
        icon="pi pi-times"
        class="lv--secondary"
        style="border-radius: 0px"
      />
    </span>

    <span class="lv-buttonset">
      <LvButton
        size="xl"
        icon="pi pi-check"
        style="border-radius: 0px"
        class="lv--primary"
      />
      <LvButton
        size="xl"
        icon="pi pi-trash"
        class="lv--danger"
        style="border-radius: 0px"
      />
      <LvButton
        size="xl"
        icon="pi pi-heart"
        class="lv--warning"
        style="border-radius: 0px"
      />
      <br />
      <LvButton
        size="xl"
        icon="pi pi-search"
        class="lv--help lv--primary"
        style="border-radius: 0px"
      />
      <LvButton
        size="xl"
        icon="pi pi-times"
        class="lv--secondary"
        style="border-radius: 0px"
      />
      <LvButton
        size="xl"
        icon="pi pi-user"
        class="lv--info"
        style="border-radius: 0px"
      />
    </span>

    <span class="lv-buttonset">
      <LvButton size="xl" icon="pi pi-check" class="lv--primary" />
      <LvButton size="xl" icon="pi pi-trash" class="lv--danger" />
      <br />
      <LvButton size="xl" icon="pi pi-search" class="lv--warning" />
      <LvButton size="xl" icon="pi pi-times" class="lv--secondary" />
      <br />
      <LvButton size="xl" icon="pi pi-heart" class="lv--help" />
      <LvButton size="xl" icon="pi pi-user" class="lv--info" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.lv-button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.lv-buttonset {
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 15px;
  .lv-button {
    margin-right: 0;
    margin-bottom: 0;
  }
}
</style>
