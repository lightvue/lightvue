export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('lightvue', { ripple: true, version: 3, nuxt: 3 });
});
