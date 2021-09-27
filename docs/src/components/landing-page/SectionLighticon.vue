<template>
  <section class="section-lighticons" id="light-icons">
    <div class="section-lighticons__wrapper">
      <div class="section-lighticons__image-wrapper">
        <img src="../../assets/images/section-lighticons.svg" alt="Light icon" class="section-lighticons__image animate" id="img2" />
      </div>
      <!-- <div class="section-lighticons__background"></div> -->
      <div class="section-lighticons__content">
        <div class="section-lighticons__content-heading">Packed with premium collection of light icons</div>
        <br />
        <div class="section-lighticons__content-description">Your imagination has no boundaries and so does our handpicked collection of premium &amp; light-weighted icons. Explore and choose icons from the vast landscape of Light-Icons.</div>
        <br />
        <br />
        <nuxt-link :to="{ hash: 'contact' }" class="page-button --dark">Know More</nuxt-link>
        <!-- <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" class="section-button__customise" style="--theme-color: #143a56; --theme-color-dark: #194a70" /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const scrollOffset = 100;

    const scrollElement = document.querySelector('#img2');

    const elementInView = (el, offset = 0) => {
      const elementTop = el.getBoundingClientRect().top;

      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    };

    const displayScrollElement = () => {
      scrollElement.classList.add('enter');
    };

    const hideScrollElement = () => {
      scrollElement.classList.add('before-enter');
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
  },
};
</script>

<style lang="scss">
.section-lighticons__wrapper {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  max-width: 1400px;
  margin: 250px auto 50px auto;
  padding: 20px;

  .section-lighticons__image-wrapper {
    width: 40%;
    z-index: 100;
    .section-lighticons__image {
      width: 80%;
    }
  }
  .section-lighticons__background {
    position: absolute;
    z-index: 0;
    left: 15%;
    transform: translateX(15%);
    width: 500px;
    height: 400px;
    background: rgba(152, 213, 213, 0.23);
    border-radius: 20px;
  }
  .section-lighticons__content {
    width: 60%;
    text-align: left;
    z-index: 100;
    .section-lighticons__content-heading {
      font-size: 32px;
      line-height: 48px;
      font-weight: 600;
      color: #143a56;
      margin-bottom: 0.78em;
    }
    .section-lighticons__content-description {
      font-size: 20px;
      line-height: 26px;
      opacity: 0.7;
      color: #143a56;
      margin-bottom: 0.78em;
    }
  }
}
// @media (max-width: 934px) {
//   .section-lighticons__wrapper {
//     .section-lighticons__content {
//       .section-lighticons__content-heading {
//         font-size: 36px;
//       }
//     }
//   }
// }
@media (max-width: 768px) {
  .section-lighticons__wrapper {
    flex-direction: column;
    margin: 0px 0px 50px 0px;
    .section-lighticons__image-wrapper {
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .section-lighticons__image {
        height: 350px;
        // margin: auto;
      }
    }
    .section-lighticons__background {
      display: none;
    }
    .section-lighticons__content {
      width: 100%;
      padding: 20px;
    }
  }
}
@media (max-width: 425px) {
  .section-lighticons__wrapper {
    .section-lighticons__image-wrapper {
      .section-lighticons__image {
        width: 100%;
      }
    }
    .section-lighticons__content {
      padding: 0px;
      .section-lighticons__content-heading {
        font-size: 28px;
      }
    }
  }
}

/* Left Slide In  */
/* .Lbtn {
  animation: leftSlide ease 1s infinite;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards; 
  -webkit-animation: leftSlide ease 1s infinite;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -webkit-animation-fill-mode: forwards; 
} */
/* 
@keyframes leftSlide {
  0% {
    opacity: 0;
    transform: translate(0px, -1500px);
  }
  60% {
    opacity: 1;
    transform: translate(0px, 30px);
  }
  80% {
    transform: translate(0px, -10px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@-webkit-keyframes leftSlide {
  0% {
    opacity: 0;
    -webkit-transform: translate(0px, -1500px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate(0px, 30px);
  }
  80% {
    -webkit-transform: translate(0px, -10px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate(0px, 0px);
  }
}

//back in right

//back right
@keyframes backInRight {
  0% {
    transform: translateX(2000px) scale(0.7);
    opacity: 0;
  }

  80% {
    transform: translateX(0px) scale(0.7);
    opacity: 0.2;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.backInRight {
  animation: backInRight 1s ease-in-out infinite;
} */

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
