import Vue from 'vue';
import LvInput from 'lightvue/input';
import LvButton from 'lightvue/button';
import LvCard from 'lightvue/card';
import VueGtag from 'vue-gtag';
import LvToast from 'lightvue/toast';
import NotificationService from 'lightvue/notification/NotificationService'; // REFACTORING
import LvToast from 'lightvue/toast/Toast.vue'; // REFACTORING
import LvNotification from 'lightvue/notification'; // REFACTORING

Vue.use(VueGtag, {
  config: { id: 'G-NSCV9YG71N' },
  appName: 'lightvue-nuxt',
});

Vue.use(LvToast);
Vue.use(NotificationService); // REFACTORING
Vue.component('LvToast', LvToast); // REFACTORING
Vue.component('LvNotification', LvNotification); // REFACTORING

Vue.component('LvInput', LvInput);
Vue.component('LvButton', LvButton);
Vue.component('LvCard', LvCard);
Vue.prototype.$lightvue = { ripple: true };
Vue.prototype.$toast = ToastService; // REFACTORING
Vue.prototype.$notification = NotificationService; // REFACTORING
