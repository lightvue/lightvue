<template>
  <div class="lv-demo_layout">
    <LvButton label="Primary" push class="lv--primary" />
    <LvButton label="Secondary" push class="lv--secondary" />
    <LvButton label="Success" push class="lv--success" />
    <LvButton label="Info" push class="lv--info" />
    <LvButton label="Warning" push class="lv--warning" />
    <LvButton label="Help" push class="lv--help" />
    <LvButton label="Danger" push class="lv--danger" />
    <LvButton label="Plain" push class="lv--plain" />
    <br />
    <LvButton label="Primary" raised class="lv--primary" />
    <LvButton label="Secondary" raised class="lv--secondary" />
    <LvButton label="Success" raised class="lv--success" />
    <LvButton label="Info" raised class="lv--info" />
    <LvButton label="Warning" raised class="lv--warning" />
    <LvButton label="Help" raised class="lv--help" />
    <LvButton label="Danger" raised class="lv--danger" />
    <LvButton label="Plain" raised class="lv--plain" />
    <br />
    <LvButton label="Primary" push outlined />
    <LvButton label="Secondary" push outlined class="lv--secondary" />
    <LvButton label="Success" push outlined class="lv--success" />
    <LvButton label="Info" push outlined class="lv--info" />
    <LvButton label="Warning" push outlined class="lv--warning" />
    <LvButton label="Help" push outlined class="lv--help" />
    <LvButton label="Danger" push outlined class="lv--danger" />
    <LvButton label="Plain" push outlined class="--text-button" />
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
