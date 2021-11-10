<template>
  <div class="lightvue__landing-page">
    <hero />
    <hero-cover />
    <index-features />
    <section-vue-migrate />
    <section-lightweight />
    <section-lighticon />
    <!-- <section-pricing /> -->
    <section-enterprise />
    <!-- <index-footer /> -->
  </div>
</template>

<script>
import Hero from '../components/landing-page/Hero.vue';
import HeroCover from '../components/landing-page/HeroCover.vue';
import IndexFeatures from '../components/landing-page/SectionFeatures.vue';
// import IndexFeatures from '../components/landing-page/IndexFeatures.vue';
import SectionLightweight from '../components/landing-page/SectionLightweight.vue';
import SectionVueMigrate from '../components/landing-page/SectionVueMigrate.vue';
import SectionLighticon from '../components/landing-page/SectionLighticon.vue';
import SectionPricing from '../components/landing-page/SectionPricing.vue';
import SectionEnterprise from '../components/landing-page/SectionEnterprise.vue';
import IndexFooter from '../components/landing-page/IndexFooter.vue';
export default {
  head: {
    title: ' Emerging Collection of well Crafted UI Components | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: ' The Ultimate Vue Component Library | LightVue ',
      },
      {
        property: 'og:description',
        content: 'The Ultimate Component Library for Vue 2 & Vue 3',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Light Vue is the Ultimate Component Library for Vue 2 & Vue 3',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  layout: 'landing',
  components: {
    Hero,
    HeroCover,
    IndexFeatures,
    IndexFooter,
    SectionLightweight,
    SectionVueMigrate,
    SectionLighticon,
    SectionPricing,
    SectionEnterprise,
  },
};
</script>

<style lang="scss">
.page-button {
  width: fit-content;
  text-decoration: none;

  padding: 16px 32px;
  border-radius: 5px;
  max-width: 100%;
  color: #fff;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease-in-out;
  &.--rounded {
    border-radius: 32px;
  }
  &.--green {
    background-color: #00a3a0;
    box-shadow: 0 6px 15px -1px #00a3a0;
    &:hover {
      background-color: #2a948d;
    }
    &:active {
      box-shadow: 0 3px 8px -1px #00a3a0;
    }
  }
  &.--dark {
    background-color: #143a56;
    box-shadow: 0 6px 15px -1px #143a56;
    &:hover {
      background-color: #1d5379;
    }
    &:active {
      box-shadow: 0 3px 8px -1px #1d5379;
    }
  }
  &:active {
    transform: translateY(2px);
  }
}
</style>
