<template>
  <header>
      <div class="heading">
          <div class="logo"><a href="./"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#566d79" d="M5.97550739,0 L10.4510148,3.41834667 L8.74152308,8.94934776 L3.20949171,8.94934776 L1.5,3.41834667 L5.97550739,0 Z M5.97550739,20 L1.5,16.5816533 L3.20949171,11.0506522 L8.74152308,11.0506522 L10.4510148,16.5816533 L5.97550739,20 Z M18.5,12.9678909 L13.2386426,14.7649021 L9.98686188,10.0599974 L13.2385083,5.35519519 L18.5,7.15237223 L18.5,12.9678909 Z"></path></svg></a></div>
          <h1>LIGHT ICONS<sup>1.0.2</sup></h1>
          <div class="info">Handpicked collection of premium &amp; lightwighted icons as font</div>
      </div>

  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
header {
    color: #566d79;
    text-align: center;
    background-color: #f5f8fa;
    .logo {
        a {
            svg {
                height: 100px;
                width: 100px;
            }
        }
    }
    h1{
    font-size: 42px;
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
