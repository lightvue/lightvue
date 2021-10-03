<template>
  <section class="section-features" id="features">
    <!-- <div class="section-features__content">
        <div class="section-features__content-heading">LightVue </div>
        <br />
        <div class="section-features__content-description">UI Library hands out everything you need to create contemporary, engaging, and responsive web applications. A platform set to offer unlimited light customizable UI variants and an implementation playground to define how your components would like to and fro.</div>
        <br /><br />
        <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" class="section-button__customise" style="--theme-color: #143a56; --theme-color-dark: #194a70" />
      </div> -->
    <div class="section-features__wrapper">
      <div class="section-features__content-wrapper">
        <div class="section-features__content">
          <div class="section-features__content-heading">The LightVue</div>
          <br />
          <div class="section-features__content-description">UI Library hands out everything you need to create contemporary, engaging, and responsive web applications. A platform set to offer unlimited light customizable UI variants and an implementation playground to define how your components would look to and fro.</div>
          <br /><br />
          <nuxt-link :to="{ hash: 'vue-migrate' }" class="page-button --dark">Know More</nuxt-link>
          <!-- <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" class="section-button__customise" style="--theme-color: #143a56; --theme-color-dark: #194a70" /> -->
        </div>
      </div>
      <div class="section-features__box-wrapper">
        <div class="features-box__group">
          <div class="section-features__single-box">
            <div class="single-box__icon"><i class="light-icon-mist"></i></div>
            <div class="single-box__heading">Light Weight</div>
            <div class="single-box__description">One of the lightest UI Library in the market for developing fast and powerful web interfaces.</div>
          </div>
          <div class="section-features__single-box">
            <div class="single-box__icon"><i class="light-icon-palette"></i></div>
            <div class="single-box__heading">Customizable</div>
            <div class="single-box__description">Structure your ideal design by choosing from countless customizable UI variants that LightVue offers.</div>
          </div>
          <div class="section-features__single-box">
            <div class="single-box__icon"><i class="light-icon-devices"></i></div>
            <div class="single-box__heading">Responsive</div>
            <div class="single-box__description">Create layouts which adapts and adjusts smoothly to various screen sizes.</div>
          </div>
          <div class="section-features__single-box --toggle-row1">
            <div class="single-box__icon"><i class="light-icon-social"></i></div>
            <div class="single-box__heading">No Dependency</div>
            <div class="single-box__description">LightVue offers zero dependency and most Web portable code that makes it reliable and fast.</div>
          </div>
        </div>
        <div class="features-box__group">
          <div class="section-features__single-box --toggle-row2">
            <div class="single-box__icon"><i class="light-icon-social"></i></div>
            <div class="single-box__heading">No Dependency</div>
            <div class="single-box__description">LightVue offers zero dependency and most Web portable code that makes it reliable and fast.</div>
          </div>
          <div class="section-features__single-box">
            <div class="single-box__icon"><i class="light-icon-atom"></i></div>
            <div class="single-box__heading">Evolved Features</div>
            <div class="single-box__description">We adhere to newfangled approach towards developer experience to make the process a blend of fun and finesse.</div>
          </div>
          <div class="section-features__single-box --first">
            <div class="single-box__icon"><i class="light-icon-id"></i></div>
            <div class="single-box__heading">Professional Design</div>
            <div class="single-box__description">LightVue lines up an array of UI components to give your web Application a professional and elegant design.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.section-features {
  display: flex;
  position: relative;
  justify-content: space-around;
  //   align-items: center;
  max-width: 1400px;
  margin: 100px auto;
  padding: 20px;

  .section-features__wrapper {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    flex-wrap: wrap;
    z-index: 100;
    .section-features__content-wrapper {
      display: flex;
      flex-direction: column;
      // width: 50%;
      margin-top: 80px;
    }
    .section-features__box-wrapper {
      display: flex;
      align-items: center;
      .section-features__single-box {
        width: 280px;
        height: 280px;
        padding: 30px;
        margin: 20px 10px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        background: #ffffff;
        color: #143a56;

        cursor: pointer;
        box-shadow: 0px 0px 16px 0px rgba(19, 58, 86, 0.1);
        transition: all 0.3s ease-in-out;
        .single-box__icon {
          height: 64px;
          width: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50px;
          // background-color: #f1faf4;
          background-color: rgba(0, 163, 160, 0.1);
          color: #00a3a0;
          margin-bottom: 1.5em;
          transition: all 0.3s ease-in-out;

          i {
            font-size: 40px;
          }
        }
        &:hover {
          background-color: #143a56;
          color: #ffffff;
          .single-box__icon {
            // background-color: rgba(155, 155, 155, 0.2);
            color: #ffffff;
          }
          // box-shadow: 0px 0px 16px 0px rgba(19, 58, 86, 0.3);
        }
        &.--first {
          position: absolute;
          bottom: 120px;
          right: 600px;
          z-index: -1;
        }
        &.--toggle-row1 {
          display: none;
        }
        .single-box__heading {
          font-size: 20px;
          margin-bottom: 1em;
          font-weight: 600;
        }
        .single-box__description {
          font-size: 16px;
          opacity: 0.7;
          // color: #143a56;
          // margin-bottom: 0.75em;
        }
      }
    }
  }
  .section-features__content {
    // width: 50%;
    max-width: 550px;
    padding: 0px 30px;
    // margin-top: 100px;
    // text-align: right;
    z-index: 100;
    .section-features__content-heading {
      font-size: 32px;
      line-height: 48px;
      font-weight: 600;
      color: #143a56;
      margin-bottom: 0.5em;
    }
    .section-features__content-description {
      font-size: 20px;
      line-height: 26px;
      opacity: 0.7;
      color: #143a56;
      margin-bottom: 0.5em;
    }
  }
}

@media (max-width: 1190px) {
  .section-features {
    .section-features__wrapper {
      .section-features__content {
        max-width: 100%;
        text-align: center;
        .section-features__content-heading {
          font-size: 32px;
        }
        .section-features__content-description {
          font-size: 20px;
        }
        .page-button {
          display: none;
        }
      }
      .section-features__box-wrapper {
        flex-direction: column;
        margin: auto;
        .section-features__single-box {
          &.--first {
            position: relative;
            bottom: unset;
            right: unset;
            z-index: unset;
          }
        }
        .features-box__group {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
      }
    }
  }
}

@media (max-width: 940px) {
  .section-features {
    .section-features__wrapper {
      .section-features__box-wrapper {
        .section-features__single-box {
          &.--toggle-row1 {
            display: flex;
          }
          &.--toggle-row2 {
            display: none;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .section-features {
    margin-top: 0px;
    .section-features__wrapper {
      .section-features__content {
        padding: 0px;
      }
    }
  }
}

@media (max-width: 634px) {
  .section-features {
    .section-features__wrapper {
      .section-features__box-wrapper {
        .section-features__single-box {
          width: 100%;
        }
      }
    }
  }
}

@media (max-width: 425px) {
  .section-features__content {
    .section-features__content-heading {
      font-size: 28px;
    }
  }
}
</style>
