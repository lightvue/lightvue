import Vue from 'vue';
import LvInput from 'lightvue/input';
import LvButton from 'lightvue/button';
import LvCard from 'lightvue/card';
import VueGtag from 'vue-gtag';
import LvToast from 'lightvue/toast';
import LvCollapsible from 'lightvue/collapsible';
import LvNotification from 'lightvue/notification';

Vue.use(VueGtag, {
  config: { id: 'G-NSCV9YG71N' },
  appName: 'lightvue-nuxt',
});

Vue.use(LvToast);
Vue.use(LvNotification);

Vue.component('LvInput', LvInput);
Vue.component('LvButton', LvButton);
Vue.component('LvCard', LvCard);
Vue.component('LvCollapsible', LvCollapsible);
Vue.prototype.$lightvue = { ripple: true };
