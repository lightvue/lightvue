<template>
  <section class="hero-section">
    <div class="hero-wrapper">
      <div class="hero-logo">
        <img src="/logo_v2.svg" alt="" />
      </div>
      <div class="hero-container">
        <div class="hero-container__row">
          <div class="hero-container__content">
            <div class="hero-container__subtext">
              The Emerging UI Component Library<br />
              <span style="font-size: 0.8em"> Designed for <span class="subtext-highlight">Vue 3.x</span> &amp; <span class="subtext-highlight">Vue 2.x </span> </span>
            </div>
          </div>
        </div>
        <div class="hero-container__row">
          <div class="hero-container__pre-wrap">
            <div class="hero-container__pre">
              <code><span class="not-selectable">$ </span> <span class="selectable">npm install lightvue</span></code>
              <CopyButton text="npm install lightvue" />
            </div>
          </div>
        </div>
        <div class="hero-container__row">
          <div class="hero-container__buttons">
            <nuxt-link to="/getting-started/installation" class="hero-button lv-fluid">
              <LvButton label="Documentation " push type="button" size="xl" icon-right="light-icon-chevron-right" style="font-size: 16px; background-color: rgba(0, 0, 0, 0.2)" />
            </nuxt-link>
            <nuxt-link :to="{ hash: 'features' }" class="hero-button lv-fluid">
              <lv-button label="Know More" push type="button" size="xl" icon-right="light-icon-plane-departure" style="font-size: 16px; background-color: rgba(0, 0, 0, 0.2)" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="hero-wave__wrap">
      <svg viewBox="0 0 1440 380" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-wave__svg">
        <path d="M1440 0H0V78.7375C265.747 120.349 397.724 150 718.001 150C1038.28 150 1152.27 131.392 1440 78.7375V0Z" fill="#143A56" />
      </svg>
      <div>
        <div class="hero-cover-image">
          <img src="/hero-bg.svg" alt="LightVue Illustration" />
        </div>
      </div>
    </div> -->

    <!-- <div class="hero-image">
      <img src="/hero-bg.svg" alt="" />
    </div> -->
  </section>
</template>

<script>
import CopyButton from '@/components/docs-card/CopyButton';

export default {
  components: {
    CopyButton,
  },
};
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
    padding: 4em 0 0;
    background-color: #133a56;
    .hero-logo {
      margin: auto;
      display: flex;
      height: 100px; /** Just to prevent fluctuation on initial-load **/
      width: 500px;
      margin-bottom: 30px;
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
        margin-bottom: 100px;
        .hero-container__heading {
          font-weight: 700;
          font-size: 3.75rem;
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
          margin: 12px;
          white-space: nowrap;
          z-index: 999;
        }
      }
      .hero-container__pre-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        .hero-container__pre {
          position: relative;
          border-radius: 4px;
          display: inline-flex;
          font-size: 20px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          margin-bottom: 2rem;
          // overflow-x: auto;
          padding: 24px 80px 24px 24px;
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
  .hero-container__pre .copy-btn__wrap {
    display: none;
  }
  .hero-section {
    .hero-wrapper {
      .hero-container__row {
        padding: 0;
        .hero-container__pre-wrap {
          .hero-container__pre {
            padding: 18px;
            font-size: 16px;
            justify-content: center;
          }
        }
        .hero-container__content {
          .hero-container__subtext {
            font-size: 1.5em;
            margin: 30px 0px 80px;
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
    /* padding: 0.6rem 1.2rem !important; */
    margin: 6px 0px !important;
    width: 100vw !important;
  }
  .hero-section {
    position: relative;

    .hero-wrapper {
      padding: 4em 0 0em;
      background-color: #133a56;
      .hero-logo {
        margin: auto;
        display: flex;
        height: 60px; /** Just to prevent fluctuation on initial-load **/
        width: 280px;
        max-width: 90vw;
      }
    }
  }
}
.hero-wave__wrap {
  width: 100%;
  position: relative;
  .hero-wave__svg {
    position: absolute;
    left: 0px;
    top: 0px;
  }
}
.hero-cover-image {
  height: 720px;
  display: flex;
  img {
    height: 100%;
    z-index: 1;
    margin: auto;
  }
}
</style>
<style>
.hero-container__pre .copy-btn__tag {
  left: 150%;
  right: unset !important;
  background-color: rgba(0, 0, 0, 0.15);
}
@media only screen and (max-width: 400px) {
  .hero-container__pre {
    padding: 24px 24px;
    width: 100%;
  }
  .hero-container .hero-container__row {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
