<template>
  <section class="hero-section">
    <div class="hero-wrapper">
      <img class="hero-logo" src="/logo_v2.png" alt="" />
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
            <nuxt-link to="/vue-components/button" class="hero-button lv-fluid">
              <LvButton label="Get Started" deep-shadow push size="lg" />
            </nuxt-link>
            <nuxt-link :to="{ hash: 'features' }" class="hero-button lv-fluid">
              <LvButton label="Why LightVue" deep-shadow push size="lg" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#143a56" fill-opacity="1" d="M0,224L48,197.3C96,171,192,117,288,101.3C384,85,480,107,576,138.7C672,171,768,213,864,208C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    <img class="hero-image" src="/hero-bg.svg" alt="" />
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$primary-color: #009387;
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
    padding: 4em 0 12em;
    background-color: #133a56;
    .hero-logo {
      margin: auto;
      display: block;
      width: 300px;
      margin-bottom: 50px;
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
            color: $primary-color;
          }
        }
      }
      .hero-container__buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .hero-button {
          width: 180px;
          margin: 16px;
          white-space: nowrap;
        }
      }
    }
  }
  .hero-image {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 720px;
    margin-top: -40%;
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
