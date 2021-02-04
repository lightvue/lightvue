<template>
  <section class="hero-section">
    <div class="hero-wrapper">
      <div class="hero-logo">
        <img src="../assets/logo_rect.png" alt="" />
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
            <nuxt-link to="/vue-components/button">
              <LvButton label="Get Started" class="hero-button" />
            </nuxt-link>
            <nuxt-link to="/vue-components/button-docs">
              <LvButton label="Documentation" class="hero-button" />
            </nuxt-link>
            <!-- <button class="hero-button">Documentation</button> -->
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#008080" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,170.7C480,203,600,245,720,272C840,299,960,309,1080,293.3C1200,277,1320,235,1380,213.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <div class="hero-container__row">
      <div class="hero-container__image">
        <img class="hero-image" src="/hero-bg.svg" alt="" />
      </div>
    </div>
    <!-- Features Section -->
    <!-- Footer Section -->
  </section>
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

.hero-section {
  position: relative;

  .hero-wrapper {
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    // position: relative;
    padding-top: 32px;
    padding: 4em 0;
    // background-image: url('../assets/wave.svg');
    background-repeat: no-repeat;
    background: #008080;
    background-position: top center;
    background-size: cover;
    // position: relative;
    padding-top: 32px;
    // height: 60vh;
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
      // position: relative;
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
          width: 15vw;
          min-width: max-content;
          background-color: #143a56;
          color: #ffffff;
          display: inline-block;
          padding: 1em 1.8125em;
          padding: 20px 20px;
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
            background: #0b283d;
            color: #ffffff80;
          }
        }
      }
    }
  }
  .hero-container__image {
    display: flex;
    justify-content: center;
    // position: relative;
    // width: 100vw;
    // padding: -40px;
    // margin: 40px;
    .hero-image {
      width: 500px;
      position: absolute;
      bottom: -200px;
      // bottom: 0px;

      // min-width: 500px;
      // width: 100%; //restore img
      // height: 500px;
    }
  }
}

@media (max-width: 768px) {
  .hero-image {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .hero-button {
    padding: 0.6rem 1.2rem !important;
    margin: 0 10px !important;
  }
}

@media only screen and (max-width: 500px) {
  .hero-image {
    width: 98vw !important;
    min-width: 10px !important;
  }
}
</style>
