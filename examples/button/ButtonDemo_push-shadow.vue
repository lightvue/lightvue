<template>
  <div class="lv-demo_layout">
    <LvButton label="Primary" deep-shadow push class="lv--primary" />
    <LvButton label="Secondary" push deep-shadow class="lv--secondary" />
    <LvButton label="Success" push deep-shadow class="lv--success" />
    <LvButton label="Info" push deep-shadow class="lv--info" />
    <LvButton label="Warning" push deep-shadow class="lv--warning" />
    <LvButton label="Help" push deep-shadow class="lv--help" />
    <LvButton label="Danger" push deep-shadow class="lv--danger" />
    <LvButton label="Plain" push deep-shadow class="lv--plain" />
  </div>
</template>

<style lang="scss" scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
