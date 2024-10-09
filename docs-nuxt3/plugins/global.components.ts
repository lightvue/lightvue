import LvButton from 'lightvue/button';
import LvToast from 'lightvue/toast';
import LvNotification from 'lightvue/notification';
import LvInput from 'lightvue/input';
export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(LvToast);
  nuxtApp.vueApp.use(LvNotification);
  nuxtApp.vueApp.component('LvButton', LvButton);
  nuxtApp.vueApp.component('LvInput', LvInput);
});
