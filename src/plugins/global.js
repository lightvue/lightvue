import Vue from 'vue';
import LvInput from '@/collections/input/Input.vue';
import LvButton from '@/collections/buttons/Button.vue';
import LvCard from '@/collections/card/Card.vue';
import VueGtag from 'vue-gtag';
import ToastService from '@/collections/toast/ToastService';
import NotificationService from '@/collections/notification/NotificationService';
import LvToast from '@/collections/toast/Toast.vue';
import LvNotification from '@/collections/notification/Notification.vue';

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
