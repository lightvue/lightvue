<template>
  <div class="error_wrapper">
    <div class="error__container">
      <div class="error-div"></div>
      <h1>Error {{ error.statusCode }}</h1>
      <div class="error-img__container">
        <img src="@/assets/images/error.svg" alt="" />
      </div>
      <div class="button">
        <nuxt-link to="/">
          <!-- <LvButton label="Back Home" deep-shadow push size="lg" /> -->
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error-layout',
};
</script>

<style>
.error_wrapper {
  width: 100%;
  text-align: center;
  padding: 0 20px;
}
/* .button {
  margin: -20px 0 20px 0;
  z-index: 1000;
} */
.error-img__container {
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-img__container img {
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0px auto;
}
.error__container h1 {
  font-size: 50px;
  text-align: center;
  display: inline-block;
  padding-right: 12px;
  animation: type 0.5s alternate infinite;
}

@keyframes type {
  from {
    box-shadow: inset -3px 0px 0px #888;
  }
  to {
    box-shadow: inset -3px 0px 0px transparent;
  }
}
</style>
