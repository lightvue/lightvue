<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#143a56" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <section class="enterprise-section" id="contact">
      <div class="enterprise-section__wrapper">
        <div class="enterprise-heading" id="heading1">Ready for Enterprises</div>
        <div class="enterprise-description" id="heading2">Offer different versions of a product to meet the differing needs as an Enterprises.</div>
        <div class="expertise-section__information-wrapper">
          <div class="enterprise-section__circle-illustration --one"></div>
          <div class="enterprise-section__circle-illustration --two"></div>
          <div class="enterprise-section__circle-illustration --three"></div>
          <div class="expertise-section__features-wrapper" id="card">
            <div class="expertise-feature__item"><i class="light-icon-palette"></i> Unlimited Customisation</div>
            <div class="expertise-feature__item"><i class="light-icon-package"></i> Light icon Pack</div>
            <div class="expertise-feature__item"><i class="light-icon-directions"></i> Vue 3.x Migration Support</div>
            <div class="expertise-feature__item"><i class="light-icon-git-fork"></i>Indipendent build modules</div>
            <div class="expertise-feature__item"><i class="light-icon-phone-calling"></i>24/7 customer support</div>
            <!-- <div class="expertise-feature__item">and many more...</div> -->
            <lv-button :push="true" :deep-shadow="true" label="Contact Us" class="enterprise-button" @click="toggleImageOverlay" aria:haspopup="true" aria-controls="contact_overlay_panel" />
            <lv-overlay-panel style="width: 350px" ref="contactOverlay" append-to="body" :show-close-icon="true" id="contact_overlay_panel">
              <div class="overlay-leadform">
                <lead-form @success="toggleImageOverlay" />
              </div>
            </lv-overlay-panel>
          </div>
          <div class="expertise-section__image-wrapper">
            <img src="../../assets/images/footer-image.svg" class="expertise-section__image" />
          </div>
        </div>
      </div>
      <div class="enterprise-footer__text">copyright 2021 © LightVue. all rights reserved.</div>
    </section>
  </div>
</template>

<script>
import LvOverlayPanel from 'lightvue/overlay-panel';
import LvTextarea from 'lightvue/textarea';
import LvDropdown from 'lightvue/dropdown';
import LeadForm from './LeadForm.vue';
export default {
  components: {
    LvOverlayPanel,
    LvTextarea,
    LvDropdown,
    LeadForm,
  },
  methods: {
    toggleImageOverlay(event) {
      this.$refs.contactOverlay.toggle(event);
    },
  },

  mounted() {
    function animateOnScroll(ele, animationName) {
      const scrollOffset = 100;

      const scrollElement = document.querySelector(ele);

      const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;

        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
      };

      const displayScrollElement = () => {
        scrollElement.classList.add(animationName);
      };

      const hideScrollElement = () => {
        scrollElement.classList.add('enter');
      };

      const handleScrollAnimation = () => {
        if (elementInView(scrollElement, scrollOffset)) {
          displayScrollElement();
        } else {
          hideScrollElement();
        }
      };

      window.addEventListener('scroll', () => {
        handleScrollAnimation();
      });
    }

    animateOnScroll('#heading1', 'InRight');
    animateOnScroll('#heading2', 'InLeft');
    animateOnScroll('#card', 'zoomIn');
  },
};
</script>

<style lang="scss">
.enterprise-section {
  background: #143a56;
  margin-top: -20px;
  padding-top: 50px;
  position: relative;
  overflow-x: hidden;
}
.enterprise-section__wrapper {
  max-width: 1200px;
  margin: auto;
  position: relative;
  .enterprise-section__circle-illustration {
    &.--one {
      position: absolute;
      width: 308px;
      height: 307px;
      border-radius: 50%;
      z-index: 0;
      left: -70px;
      top: 120px;
      background: linear-gradient(346.25deg, #356385 -58.76%, #143a56 81.74%);
      transform: rotate(-44.34deg);
    }
    &.--two {
      position: absolute;
      width: 202px;
      height: 201px;
      border-radius: 50%;
      top: 200px;
      right: 300px;
      z-index: 0;
      background: linear-gradient(346.25deg, #356385 -63.31%, #143a56 77.19%);
      transform: rotate(-97.31deg);
    }
    &.--three {
      position: absolute;
      width: 129.54px;
      height: 128.92px;
      border-radius: 50%;
      left: 420px;
      z-index: 0;
      background: linear-gradient(346.25deg, #356385 -63.31%, #143a56 77.19%);
      transform: rotate(138.16deg);
    }
  }
  .enterprise-heading {
    font-size: 32px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 0.75em;
    z-index: 100;
  }
  .enterprise-description {
    font-size: 20px;
    color: #cccccc;
    text-align: center;
    padding: 20px;
    z-index: 100;
  }
  .expertise-section__information-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px 0px;
    .expertise-section__image-wrapper {
      z-index: 100;
      .expertise-section__image {
        width: 320px;
      }
    }
    .expertise-section__features-wrapper {
      width: 350px;
      background: rgba(76, 104, 124, 0.86);
      border-radius: 20px;
      padding: 50px 50px;
      color: #ffffff;
      z-index: 100;
      margin-top: 60px;
      .expertise-feature__item {
        z-index: 100;
        margin-bottom: 30px;
        font-size: 16px;
        i {
          padding: 10px;
          height: 40px;
          width: 40px;
          border-radius: 50%;
          background: #143a56;
          color: #ffffff;
          margin-right: 12px;
        }
      }
      .enterprise-button {
        --theme-color-dark: #194a70;
        --theme-color: #143a56;
        margin-top: 30px;
        height: 40px;
        width: 250px;
      }
    }
  }
}
.enterprise-footer__text {
  border-top: 1px solid #224b69;
  max-width: 1200px;
  margin: auto;
  text-align: center;
  padding: 20px;
}
.overlay-leadform {
  padding: 12px;
  .leadform__button {
    --theme-color-dark: #194a70;
    --theme-color: #143a56;
    margin-top: 15px;
    height: 40px;
    width: 250px;
  }
}
@media (max-width: 768px) {
  .enterprise-section__circle-illustration {
    display: none;
  }
  .expertise-section__image-wrapper {
    display: none;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

//right key
@keyframes InRight {
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(-5deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

//left
@keyframes InLeft {
  from {
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(5deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.InLeft {
  animation: InLeft 2s ease-out;
  animation-timing-function: ease-out;
}

.InRight {
  animation: InRight 2s ease-out;
  animation-timing-function: ease-out;
}

.zoomIn {
  animation: zoomIn 1.3s ease-in-out;
}
.before-enter {
  opacity: 0;
  transform: scale(0.5) rotateZ(-25deg);
  transition: all 1s ease-out;
}
/* 
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}
</style>
