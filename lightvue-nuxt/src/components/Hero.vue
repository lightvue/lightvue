<template>
  <div>
    <div class="hero-wrapper">
      <div class="hero-logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="hero-container">
        <div class="hero-container__row">
          <div class="hero-container__content">
            <!-- <h1 class="hero-container__heading">LightVue</h1> -->

            <p class="hero-container__subtext">
              The Ultimate UI Component Library
              <span class="subtext-highlight">for Vue</span>
            </p>
          </div>
        </div>
        <div class="hero-container__row">
          <div class="hero-container__buttons">
            <button class="hero-button">Get Started</button>
            <button class="hero-button">Documentation</button>
          </div>
        </div>
        <div class="hero-container__row">
          <div class="hero-container__image">
            <img class="hero-image" src="@/assets/hero-bg-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- Features Section -->
    <!-- Footer Section -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$primary-color: #008060;
$seconday-color: #143a56;
$text-color-primary: #143a56;
$text-color-secondary: #eeecec;
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.5;
}

.hero-wrapper {
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: relative;
  padding-top: 32px;
  padding: 4em 0;
  background-image: url("../assets/wave.png");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: relative;
  padding-top: 32px;
  .hero-logo {
    display: flex;
    justify-content: center;
    img {
      width: 200px;
      margin-bottom: 30px;
    }
  }
  .hero-container {
    display: flow-root;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 5%;
    padding-right: 5%;
  }
  .hero-container__row {
    padding-left: 18px;
    padding-right: 18px;
    position: relative;
    width: 100%;
    float: left;
    .hero-container__content {
      text-align: center;
      .hero-container__heading {
        font-weight: 700;
        font-size: 3.75rem;
        margin-bottom: 0.25rem;
        letter-spacing: -0.2rem;
        color: $text-color-primary;
      }
      .hero-container__subtext {
        text-align: center;
        font-size: 2.25em;
        margin-bottom: 0.5em;
        color: $text-color-secondary;
        margin-bottom: 50px;
        .subtext-highlight {
          font-weight: 700;
          color: $text-color-primary;
        }
      }
    }
    .hero-container__buttons {
      display: flex;
      justify-content: center;

      .hero-button {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
        background-color: #212326;
        color: #ffffff;
        display: inline-block;
        padding: 1em 1.8125em;
        border-radius: 4px;
        font-weight: 700;
        font-size: 1em;
        line-height: 1.133;
        border: 0px;
        outline: 0px;
        margin: 0 40px;
        margin-bottom: 0;
        cursor: pointer;
        &:hover {
          background: black;
        }
      }
    }
  }
  .hero-container__image {
    display: flex;
    justify-content: center;
    // padding: -40px;
    // margin: 40px;
    .hero-image {
      width: 100%;
      // height: 500px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .hero-button {
    padding: 0.6rem 1.2rem !important;
    margin: 0 10px !important;
  }
}
</style>
