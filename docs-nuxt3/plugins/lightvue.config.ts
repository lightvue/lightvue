export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('lightvue', { ripple: true, version: 3 });
});
