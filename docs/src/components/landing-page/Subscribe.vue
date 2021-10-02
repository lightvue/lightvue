<template>
  <div class="subscribe-cover__wrap">
    <div class="subscribe-cover__bg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="margin-bottom: -8px"><path fill="#143a56" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <!-- <div class="subscribe-cover__bg-blank"></div> -->
    </div>
    <div class="subscribe-card">
      <div class="subscribe-card__left">
        <div class="__left-heading">Ready To Get Started ?</div>
        <div class="__left-description">Talk to us today!</div>
      </div>
      <div class="subscribe-card__right">
        <!-- <lv-button rounded>Subscribe</lv-button> -->
        <div class="subscribe-btn">Subscribe</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.subscribe-cover__wrap {
  width: 100%;
  position: relative;
  padding: 120px 30px;

  // display: flex;
  // align-items: center;
  // justify-content: center;
  .subscribe-cover__bg {
    position: absolute;
    left: 0px;
    // top: 0px;
    bottom: 0px;
    width: 100%;
    z-index: 1;
  }
  // .subscribe-cover__bg-blank {
  //   height: 20px;
  //   width: 100%;
  //   background-color: #143a56;
  // }
  .subscribe-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    // height: 220px;
    background-color: #ffffff;

    margin: auto;
    width: 90%;
    padding: 32px;
    max-width: 1200px;
    z-index: 5;
    position: relative;

    border-radius: 8px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
    .__left-heading {
      font-size: 36px;
      color: #008080;
      font-weight: 500;
    }
    .__left-description {
      font-size: 44px;
      font-weight: 300;
    }
    .subscribe-btn {
      background-color: #133a56;
      color: #fff;
      padding: 16px 56px;
      font-size: 20px;
      border-radius: 32px;
      cursor: pointer;
      margin: 24px 0px;
    }
  }
}
@media (max-width: 600px) {
  .subscribe-card {
    text-align: center;
  }
  // .subscribe-btn {
  //   margin: 24px auto;
  // }
}
</style>
