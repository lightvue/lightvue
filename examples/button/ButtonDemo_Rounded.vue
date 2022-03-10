<template>
  <div>

    <LvButton label="Primary" rounded class="lv--primary" />
    <LvButton label="Secondary" rounded class="lv--secondary" />
    <LvButton label="Success" rounded class="lv--success" />
    <LvButton label="Info" rounded class="lv--info" />
    <LvButton label="Warning" rounded class="lv--warning" />
    <LvButton label="Help" rounded class="lv--help" />
    <LvButton label="Danger" rounded class="lv--danger" />
</br>
    <LvButton icon="light-icon-bookmark" rounded class="lv--secondary" />
    <LvButton icon="light-icon-search" rounded class="lv--success" />
    <LvButton icon="light-icon-user" rounded class="lv--info" />
    <LvButton icon="light-icon-bell" rounded class="lv--warning" />
    <LvButton icon="light-icon-heart" rounded class="lv--help" />
    <LvButton icon="light-icon-trash" rounded class="lv--danger" />
    <LvButton icon="light-icon-circle-check" rounded class="lv--primary" />

</br>
    <LvButton icon="light-icon-circle-check" rounded outlined class="lv--primary" />
    <LvButton icon="light-icon-bookmark" rounded outlined class="lv--secondary" />
    <LvButton icon="light-icon-search" rounded outlined class="lv--success" />
    <LvButton icon="light-icon-user" rounded outlined class="lv--info" />
    <LvButton icon="light-icon-bell" rounded outlined class="lv--warning" />
    <LvButton icon="light-icon-heart" rounded outlined class="lv--help" />
    <LvButton icon="light-icon-trash" rounded outlined class="lv--danger" />
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
