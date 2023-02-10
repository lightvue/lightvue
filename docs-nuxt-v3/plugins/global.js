export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.globalProperties.$lightvue = { ripple: true, version: 3 };
  nuxtApp.vueApp.config.globalProperties.$listeners = '';
});
