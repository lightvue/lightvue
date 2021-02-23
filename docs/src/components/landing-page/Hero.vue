<template>
  <section class="hero-section">
    <div class="hero-wrapper">
      <div class="hero-logo">
        <img src="/logo_v2.svg" alt="" />
      </div>
      <div class="hero-container">
        <div class="hero-container__row">
          <div class="hero-container__content">
            <!-- <h1 class="hero-container__heading">LightVue</h1> -->

            <p class="hero-container__subtext">
              The Emerging UI Component library<br />
              <!-- Emerging Collection of well Crafted UI Components <br /> -->
              for <span class="subtext-highlight">Vue 3.x</span> &amp; <span class="subtext-highlight">Vue 2.x</span>
            </p>
          </div>
        </div>
        <div class="hero-container__row">
          <div class="hero-container__pre">
            <pre>
           <code><span class="not-selectable">$ </span>npm install lightvue</code>
          </pre>
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
    <svg class="bottom__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#143a56" fill-opacity="1" d="M0,224L48,197.3C96,171,192,117,288,101.3C384,85,480,107,576,138.7C672,171,768,213,864,208C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    <div class="hero-image">
      <img src="/hero-bg.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$primary-color: #39b3ab;
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
      display: flex;
      height: 150px;
      width: 500px;
      margin-bottom: 50px;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
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
            color: $primary-color;
          }
        }
      }
      .hero-container__buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        z-index: 200;
        .hero-button {
          width: 180px;
          margin: 16px;
          white-space: nowrap;
          z-index: 999;
        }
      }
      .hero-container__pre {
        display: flex;
        align-items: center;
        justify-content: center;
        pre {
          border-radius: 4px;
          display: inline-flex;
          font-size: 24px;
          color: #ffffff;
          background: #135483;
          margin-bottom: 2rem;
          overflow-x: auto;
          padding: 20px 24px;
          white-space: pre;
          .not-selectable {
            user-select: none;
          }
        }
      }
    }
  }
  .hero-image {
    margin: auto;
    display: block;
    width: 80%;
    height: 720px;
    width: 720px;
    margin-top: -40%;
    img {
      height: 100%;
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .hero-section {
    .hero-wrapper {
      .hero-container__row {
        .hero-container__content {
          .hero-container__subtext {
            font-size: 1.5em;
            margin: 50px 0px;
          }
        }
      }
    }
    .hero-image {
      display: none;
    }
    .bottom__wave {
      display: none;
    }
  }
}
//--
@media (min-width: 950px) {
  .hero-image {
    position: relative;
    top: 25px;
    transform: scale(0.85);
  }
}

@media only screen and (min-width: 1800px) {
  .hero-image {
    position: relative;
    top: 60px;
    transform: scale(0.85);
  }
}

@media only screen and (min-width: 2000px) {
  .hero-image {
    position: relative;
    top: 175px;
    transform: scale(0.85);
  }
}
//--

//--
@media only screen and (max-width: 600px) {
  .hero-button {
    padding: 0.6rem 1.2rem !important;
    margin: 6px 5px !important;
    width: 100vw !important;
  }
  .hero-section {
    position: relative;

    .hero-wrapper {
      padding: 4em 0 12em;
      background-color: #133a56;
      .hero-logo {
        margin: auto;
        display: flex;
        height: 100px;
        width: 280px;
      }
      .hero-container__row {
        .hero-container__pre {
          display: flex;
          align-items: center;
          justify-content: center;
          pre {
            border-radius: 4px;
            display: inline-flex;
            font-size: 18px;
            color: #ffffff;
            background: #135483;
            margin-bottom: 2rem;
            overflow-x: auto;
            padding: 18px 22px;
            white-space: pre;
            .not-selectable {
              user-select: none;
            }
          }
        }
      }
    }
  }
}
</style>
