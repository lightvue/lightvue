import Vue from 'vue';
import LvInput from '@/collections/input/Input.vue';
import LvButton from '@/collections/buttons/Button.vue';
import LvCard from '@/collections/card/Card.vue';
import VueGtag from 'vue-gtag';
import ToastService from '@/collections/toast/ToastService';
import LvToast from '@/collections/toast/Toast.vue';

Vue.use(VueGtag, {
  config: { id: 'G-NSCV9YG71N' },
  appName: 'lightvue-nuxt',
});

Vue.use(ToastService);
Vue.component('LvToast', LvToast);

Vue.component('LvInput', LvInput);
Vue.component('LvButton', LvButton);
Vue.component('LvCard', LvCard);
Vue.prototype.$lightvue = { ripple: true };
