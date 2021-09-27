<template>
  <section class="vue-migrate" id="vue-migrate">
    <div class="vue-migrate__wrapper">
      <div class="vue-migrate__content" id="migrationdes">
        <div class="vue-migrate__content-heading">Swift migration from Vue 2.x to Vue 3.x</div>
        <br />
        <div class="vue-migrate__content-description">Developing cut edge projects just got easier.With just one step upgradation, 100% backward compatibilty and identical APIs in both the environments, LightVue offers a hastle free migration from your Vue 2.x to Vue 3.x projects in just two ticks.</div>
        <br /><br />
        <nuxt-link :to="{ hash: 'light-weight' }" class="page-button --dark">Know More</nuxt-link>
        <!-- <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" class="section-button__customise" style="--theme-color: #143a56; --theme-color-dark: #194a70" /> -->
      </div>
      <div class="vue-migrate__image-wrapper">
        <img src="../../assets/images/migrate-vue.svg" alt="migrate-vue" class="vue-migrate__image" id="migrate" />
      </div>
      <!-- <div class="vue-migrate__background"></div> -->
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    function animateOnScroll(ele, animationName) {
      const scrollOffset = 100;

      const scrollElement = document.querySelector(ele);

      const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;

        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
      };

      const displayScrollElement = () => {
        scrollElement.classList.add('enter');
      };

      const hideScrollElement = () => {
        scrollElement.classList.add(animationName);
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

    animateOnScroll('#migrate', 'before-enter');
  },
};
</script>

<style lang="scss">
.vue-migrate__wrapper {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  max-width: 1400px;
  margin: 0px auto;
  padding: 100px 20px;

  .vue-migrate__image-wrapper {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    z-index: 100;
    .vue-migrate__image {
      width: 100%;
    }
  }
  .vue-migrate__background {
    position: absolute;
    z-index: 0;
    right: 15%;
    transform: translateX(-15%);
    // transform: translateX(-50%);
    width: 500px;
    height: 400px;
    background: rgba(152, 213, 213, 0.23);
    border-radius: 20px;
  }
  .vue-migrate__content {
    width: 60%;
    max-width: 650px;
    // text-align: right;
    z-index: 100;
    .vue-migrate__content-heading {
      font-size: 32px;
      line-height: 48px;
      font-weight: 600;
      color: #143a56;
      margin-bottom: 0.78em;
    }
    .vue-migrate__content-description {
      font-size: 20px;
      line-height: 26px;
      opacity: 0.7;
      color: #143a56;
      margin-bottom: 0.78em;
    }
  }
}

@media (max-width: 934px) {
  .vue-migrate__wrapper {
    .vue-migrate__content {
      .vue-migrate__content-heading {
        font-size: 36px;
      }
    }
  }
}
@media (max-width: 768px) {
  .vue-migrate__wrapper {
    flex-direction: column-reverse;
    margin: 0px;
    padding: 0px 20px;
    .vue-migrate__image-wrapper {
      width: 100%;
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .vue-migrate__image {
        width: 80%;
      }
    }
    .vue-migrate__background {
      display: none;
    }
    .vue-migrate__content {
      width: 100%;
      text-align: left;
    }
  }
}
@media (max-width: 425px) {
  .vue-migrate__wrapper {
    .vue-migrate__image-wrapper {
      .vue-migrate__image {
        width: 100%;
      }
    }
    .vue-migrate__content {
      .vue-migrate__content-heading {
        font-size: 28px;
      }
    }
  }
}
.Lbtn {
  animation: leftSlide ease 1s infinite;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards; /*when the spec is finished*/
  -webkit-animation: leftSlide ease 1s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -webkit-animation-fill-mode: forwards; /*Chrome 16+, Safari 4+*/
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
@keyframes leftSlide {
  0% {
    opacity: 0;
    transform: translate(-1500px, 0px);
  }
  60% {
    opacity: 1;
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
}
</style>
