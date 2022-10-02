<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#143a56" fill-opacity="1" d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <section class="enterprise-section" id="contact">
      <div class="enterprise-section__wrapper">
        <div class="enterprise-heading">Ready for Enterprises</div>
        <div class="enterprise-description">LightVue supports unlimited customization of UI to meet the diverging needs of Enterprises.</div>
        <div class="expertise-section__information-wrapper">
          <div class="enterprise-section__circle-illustration --one"></div>
          <div class="enterprise-section__circle-illustration --two"></div>
          <div class="enterprise-section__circle-illustration --three"></div>
          <div class="expertise-section__features-wrapper">
            <div class="expertise-feature__item"><i class="light-icon-palette"></i> Premium Components</div>
            <div class="expertise-feature__item"><i class="light-icon-package"></i> Custom Theme Pack</div>
            <div class="expertise-feature__item"><i class="light-icon-git-fork"></i>Whitelabel Branding</div>
            <div class="expertise-feature__item"><i class="light-icon-directions"></i> Vue 3.x Migration Support</div>
            <div class="expertise-feature__item"><i class="light-icon-phone-calling"></i>24/7 Customer Support</div>
            <!-- <div class="expertise-feature__item">and many more...</div> -->
            <lv-button :push="true" :deep-shadow="true" label="Contact Us" class="enterprise-button" @click="showContactDrawer = !showContactDrawer" aria:haspopup="true" aria-controls="contact_overlay_panel" />
            <div class="enterprise--drawer">
              <lv-drawer v-model="showContactDrawer" right close shadow background="#fff" :zIndex="1000" :width="600" :height="600">
                <lead-form @success="showContactDrawer = false" />
              </lv-drawer>
            </div>
          </div>
          <div class="expertise-section__image-wrapper">
            <img src="../../assets/images/footer-image.svg" class="expertise-section__image" />
          </div>
        </div>
      </div>

      <div class="enterprise-footer__text">Copyright {{ currentYear }} © LightVue. all rights reserved.</div>
    </section>
  </div>
</template>

<script>
import LeadForm from './LeadForm.vue';
import LvDrawer from 'lightvue/drawer';
import { DateUtils } from 'lightvue/utils';
export default {
  components: {
    LeadForm,
    LvDrawer,
  },
  data() {
    return {
      showContactDrawer: false,
      currentYear: DateUtils?.getCurrentYear() || 2022,
    };
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
      position: relative;
      width: 350px;
      background: rgba(76, 104, 124, 0.86);
      border-radius: 20px;
      padding: 50px 50px;
      color: #ffffff;
      margin-top: 60px;
      .expertise-feature__item {
        z-index: 1;
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
.enterprise--drawer {
  color: rgb(96, 124, 138);
}
@media (max-width: 768px) {
  .enterprise-section__circle-illustration {
    display: none;
  }
  .expertise-section__image-wrapper {
    display: none;
  }
}
</style>
