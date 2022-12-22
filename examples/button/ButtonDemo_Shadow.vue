<template>
  <div class="lv-demo_layout">
    <LvButton label="Primary" deep-shadow-hover class="lv--primary" />
    <LvButton label="Secondary" deep-shadow-hover class="lv--secondary" />
    <LvButton label="Success" deep-shadow-hover class="lv--success" />
    <LvButton label="Info" deep-shadow-hover class="lv--info" />
    <LvButton label="Warning" deep-shadow-hover class="lv--warning" />
    <LvButton label="Help" deep-shadow-hover class="lv--help --deep-shadow-hover" />
    <LvButton label="Danger" deep-shadow-hover class="lv--danger" />
    <LvButton label="Plain" deep-shadow-hover class="lv--plain" />
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
