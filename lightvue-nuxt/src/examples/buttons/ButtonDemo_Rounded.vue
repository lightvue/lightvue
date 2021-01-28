<template>
  <div>
    <h5>Rounded Buttons</h5>
    <LvButton label="Primary" rounded class="lv--primary" />
    <LvButton label="Secondary" rounded class="lv--secondary" />
    <LvButton label="Success" rounded class="lv--success" />
    <LvButton label="Info" rounded class="lv--info" />
    <LvButton label="Warning" rounded class="lv--warning" />
    <LvButton label="Help" rounded class="lv--help" />
    <LvButton label="Danger" rounded class="lv--danger" />

    <h5>Rounded Icon Buttons</h5>
    <LvButton icon="pi pi-bookmark" rounded class="lv--secondary" />
    <LvButton icon="pi pi-search" rounded class="lv--success" />
    <LvButton icon="pi pi-user" rounded class="lv--info" />
    <LvButton icon="pi pi-bell" rounded class="lv--warning" />
    <LvButton icon="pi pi-heart" rounded class="lv--help" />
    <LvButton icon="pi pi-times" rounded class="lv--danger" />
    <LvButton icon="pi pi-check" rounded class="lv--primary" />

    <h5>Rounded and Outlined Icon Buttons</h5>
    <LvButton icon="pi pi-check" rounded outlined class="lv--primary" />
    <LvButton icon="pi pi-bookmark" rounded outlined class="lv--secondary" />
    <LvButton icon="pi pi-search" rounded outlined class="lv--success" />
    <LvButton icon="pi pi-user" rounded outlined class="lv--info" />
    <LvButton icon="pi pi-bell" rounded outlined class="lv--warning" />
    <LvButton icon="pi pi-heart" rounded outlined class="lv--help" />
    <LvButton icon="pi pi-times" rounded outlined class="lv--danger" />

    <h5>Rounded Button Set</h5>
    <span class="lv-buttonset">
      <LvButton rounded label="Save" icon="pi pi-check" class="lv--primary" />
      <LvButton rounded label="Delete" icon="pi pi-trash" class="lv--danger" />
      <LvButton
        rounded
        label="Cancel"
        icon="pi pi-times"
        class="lv--secondary"
      />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.lv-button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.lv-buttonset {
  .lv-button {
    margin-right: 0;
    margin-bottom: 0;
  }
}
</style>
