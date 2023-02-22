<template>
  <header>
    <div class="page-header">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path fill="none" stroke="#566d79" stroke-width="1" d="M5.97550739,0 L10.4510148,3.41834667 L8.74152308,8.94934776 L3.20949171,8.94934776 L1.5,3.41834667 L5.97550739,0 Z M5.97550739,20 L1.5,16.5816533 L3.20949171,11.0506522 L8.74152308,11.0506522 L10.4510148,16.5816533 L5.97550739,20 Z M18.5,12.9678909 L13.2386426,14.7649021 L9.98686188,10.0599974 L13.2385083,5.35519519 L18.5,7.15237223 L18.5,12.9678909 Z"></path>
        </svg>
      </div>
      <h1>
        LIGHT ICONS<sup>v{{ currentVersion }}</sup>
      </h1>
      <div class="info">Handpicked collection of premium &amp; lightwighted icons as font</div>
    </div>
  </header>
</template>

<script>
export default {
  created() {
    // const pkg = require('../../../package.json')
    // this.currentVersion = pkg.version
  },
  data() {
    return {
      currentVersion: '1.0.10',
    };
  },
};
</script>

<style scoped lang="scss">
.page-header {
  color: var(--text-color);
  text-align: center;
  background: var(--lv-background-color-alt);
  .logo {
    svg {
      height: 104px;
      width: 100px;
    }
  }
  h1 {
    font-size: 36px;
    padding: 26px 0 10px 0;
    font-weight: bold;
  }
  sup {
    font-size: 14px;
    margin: 8px 0 0 8px;
    position: absolute;
    vertical-align: super;
  }
}
</style>
