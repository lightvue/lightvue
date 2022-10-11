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
@import './examples.scss';
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}

body,
#app {
  background-color: #f5f8fa;
  color: #566d79;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
