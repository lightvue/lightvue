<template>
  <div id="app">
    <Nuxt />
    <LvNotification />
    <LvNotification position="top-left" />
    <LvNotification position="bottom-left" />
    <LvNotification position="bottom-right" />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import './overwrite.scss';
</style>
