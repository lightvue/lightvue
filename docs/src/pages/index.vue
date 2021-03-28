<template>
  <div class="lightvue__landing-page">
    <hero />
    <index-features />
    <section-lightweight />
    <section-vue-migrate />
    <section-lighticon />
    <!-- <section-pricing /> -->
    <section-enterprise />
    <index-footer />
  </div>
</template>

<script>
import Hero from '../components/landing-page/Hero.vue';
import IndexFeatures from '../components/landing-page/IndexFeatures.vue';
import SectionLightweight from '../components/landing-page/SectionLightweight.vue';
import SectionVueMigrate from '../components/landing-page/SectionVueMigrate.vue';
import SectionLighticon from '../components/landing-page/SectionLighticon.vue';
import SectionPricing from '../components/landing-page/SectionPricing.vue';
import SectionEnterprise from '../components/landing-page/SectionEnterprise.vue';
import IndexFooter from '../components/landing-page/IndexFooter.vue';
export default {
  head: {
    title: 'LightVue | Emerging Collection of well Crafted UI Components',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'LightVue | The Ultimate Vue Component Library',
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

<style></style>
