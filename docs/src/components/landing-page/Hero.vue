<template>
  <section class="hero-section">
    <div class="hero-wrapper">
      <div class="hero-logo fadeInUp">
        <img src="/logo_v2.svg" alt="" />
      </div>
      <div class="hero-container">
        <div class="hero-container__row">
          <div class="hero-container__content">
            <div class="hero-container__subtext">
              The Emerging UI Component library<br />
              for <span class="subtext-highlight">Vue 3.x</span> &amp; <span class="subtext-highlight">Vue 2.x </span>
            </div>
          </div>
        </div>
        <div class="hero-container__row">
          <div class="hero-container__pre-wrap">
            <div class="hero-container__pre">
              <!-- <CopyButton :text="getNpmCode" /> -->
              <code><span class="not-selectable">$ </span> <span class="selectable">npm install lightvue</span></code>
            </div>
          </div>
        </div>
        <div class="hero-container__row">
          <div class="hero-container__buttons">
            <nuxt-link to="/getting-started/installation" class="hero-button lv-fluid">
              <LvButton label="Get Started" :push="true" :deep-shadow="true" type="button" size="xl" style="font-size: 16px" />
            </nuxt-link>
            <nuxt-link :to="{ hash: 'features' }" class="hero-button lv-fluid">
              <lv-button label="Explore" :push="true" :deep-shadow="true" type="button" size="xl" style="font-size: 16px" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#143a56" fill-opacity="1" d="M0,64L120,90.7C240,117,480,171,720,165.3C960,160,1200,96,1320,64L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    <div class="hero-image">
      <img src="/hero-bg.svg" alt="" />
    </div>
  </section>
</template>

<script>
// import CopyButton from '@/components/docs-card/CopyButton';

export default {
  // components: {
  //   CopyButton,
  // },
  // methods: {
  //   getNpmCode() {
  //     return this.$el.querySelector('.selectable').innerText;
  //   },
  // },
  // mounted() {
  // function animateOnScroll(ele, animationName) {
  //   const scrollOffset = 100;
  //   const scrollElement = document.querySelector(ele);
  //   const elementInView = (el, offset = 0) => {
  //     const elementTop = el.getBoundingClientRect().top;
  //     return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
  //   };
  //   const displayScrollElement = () => {
  //     scrollElement.classList.add(animationName);
  //   };
  //   const hideScrollElement = () => {
  //     scrollElement.classList.add('enter');
  //   };
  //   const handleScrollAnimation = () => {
  //     if (elementInView(scrollElement, scrollOffset)) {
  //       displayScrollElement();
  //     } else {
  //       hideScrollElement();
  //     }
  //   };
  //   window.addEventListener('scroll', () => {
  //     handleScrollAnimation();
  //   });
  // }
  // animateOnScroll('#logo', 'fadeOutUp');
  // animateOnScroll('#subtex', 'fadeOutUp');
  // animateOnScroll('#card', 'fadeOutUp');
  // },
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

/* .LeftSideINAnimation {
  animation: leftSlide ease 1s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards; 
  -webkit-animation: leftSlide ease 1s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -webkit-animation-fill-mode: forwards; 
} */

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
        margin-bottom: 2.3em;
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
          margin: 16px;
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
        .hero-container__pre-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          .hero-container__pre {
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
/* left side Slide in animation Keyframes */
/* @keyframes leftSlide {
  0% {
    opacity: 0;
    transform: translate(-1500px, 0px);
  }
  60% {
    
    transform: translate(30px, 0px);
  }
  80% {
    transform: translate(-10px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@-webkit-keyframes leftSlide {
  0% {
    opacity: 0;
    -webkit-transform: translate(-1500px, 0px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate(30px, 0px);
  }
  80% {
    -webkit-transform: translate(-10px, 0px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate(0px, 0px);
  }
} */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* Fade out animation keyframes */
/* @keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
} */

.fadeInUp {
  animation: fadeInUp 1s ease-in-out;
}
</style>
