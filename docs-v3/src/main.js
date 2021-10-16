import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { RouterLink } from 'vue-router';

import LvButton from 'lightvue/button';
import LvToast from 'lightvue/toast';
import LvNotification from 'lightvue/notification';
import LvInput from 'lightvue/input';
import LvBadge from 'lightvue/badge';

const app = createApp(App).use(router);
app.config.globalProperties.$listeners = '';
app.config.globalProperties.$lightvue = { ripple: true, version: 3 };
app.use(LvToast);
app.use(LvNotification);

app.component('NuxtLink', RouterLink);
app.component('LvButton', LvButton);
app.component('LvBadge', LvBadge);
app.component('LvInput', LvInput);

app.mount('#app');
