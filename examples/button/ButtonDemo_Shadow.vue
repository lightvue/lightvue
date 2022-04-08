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
    <br />

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
