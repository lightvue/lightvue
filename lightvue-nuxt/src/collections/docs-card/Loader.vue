<template>
  <div class="preloader">
    <div class="loader">
      <div class="shadow"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.preloader {
  width: 100%;
  height: 100%;
  background: #f5f8fa;
  padding: 50px 0px 100px;
  .loader {
    position: relative;
    text-align: center;
    margin: 0px auto;
    width: 100px;
    height: 100px;
    .box {
      height: 100px;
      width: 100px;
      background: #607c8a;
      animation: animate 0.5s linear infinite;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
    .shadow {
      width: 100%;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 150px;
      left: 0%;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
  }
}

@keyframes loader {
  0% {
    left: -100px;
  }
  100% {
    left: 110%;
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
