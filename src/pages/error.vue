<template>
  <div class="error_wrapper">
    <div class="error__container">
      <div class="error-div"></div>
      <h1>Error 404</h1>
      <div class="error-img__container">
        <img src="@/assets/images/error.png" alt="" />
      </div>
      <div class="button">
        <nuxt-link to="/index">
          <LvButton label="Back Home" deep-shadow push size="lg" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.error_wrapper {
  transition: all 0.6s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 0 20px;
}
.button {
  margin: -20px 0 20px 0;
  z-index: 1000;
}
.error-img__container {
  max-width: 500px;
}
.error-img__container img {
  width: 100%;
}
.error__container h1 {
  font-size: 50px;
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
