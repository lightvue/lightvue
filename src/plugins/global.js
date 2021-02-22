import Vue from 'vue';
import LvInput from 'lightvue/input/Input.vue';
import LvButton from 'lightvue/button/Button.vue';
import LvCard from 'lightvue/card/Card.vue';
import VueGtag from 'vue-gtag';
import ToastService from 'lightvue/toast/ToastService';
import NotificationService from 'lightvue/notification/NotificationService';
import LvToast from 'lightvue/toast/Toast.vue';
import LvNotification from 'lightvue/notification/Notification.vue';

Vue.use(VueGtag, {
  config: { id: 'G-NSCV9YG71N' },
  appName: 'lightvue-nuxt',
});

Vue.use(ToastService);
Vue.use(NotificationService);
Vue.component('LvToast', LvToast);
Vue.component('LvNotification', LvNotification);

Vue.component('LvInput', LvInput);
Vue.component('LvButton', LvButton);
Vue.component('LvCard', LvCard);
Vue.prototype.$lightvue = { ripple: true };
