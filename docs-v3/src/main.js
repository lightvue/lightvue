import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { RouterLink } from 'vue-router';

import LvButton from 'lightvue/button';
// import LvToast from 'lightvue/toast';
import LvToast from 'lightvue/toast';
import NotificationService from 'lightvue/notification/NotificationService';
import LvNotification from 'lightvue/notification';
import LvInput from 'lightvue/input';

const app = createApp(App).use(router);
app.config.globalProperties.$listeners = '';
app.config.globalProperties.$lightvue = { ripple: true };
// app.config.globalProperties.$toast = ToastService;
app.config.globalProperties.$notification = NotificationService;
app.use(LvToast);

app.component('NuxtLink', RouterLink);
app.component('LvButton', LvButton);
app.component('LvNotification', LvNotification);
// app.component('LvToast', LvToast);
app.component('LvInput', LvInput);
// app.component(nuxt-link: )

app.mount('#app');
