import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { RouterLink } from 'vue-router';

import LvButton from 'lightvue/button';
import LvToast from 'lightvue/toast';
// import LvToast from 'lightvue/toast'; // REFACTORING
// import NotificationService from 'lightvue/notification/NotificationService'; // REFACTORING
import LvNotification from 'lightvue/notification'; // REFACTORING
import LvInput from 'lightvue/input';

const app = createApp(App).use(router);
app.config.globalProperties.$listeners = '';
app.config.globalProperties.$lightvue = { ripple: true, version: 3 };
// app.config.globalProperties.$toast = ToastService; // REFACTORING
// app.config.globalProperties.$notification = NotificationService; // REFACTORING
app.use(LvToast);
app.use(LvNotification);

app.component('NuxtLink', RouterLink);
app.component('LvButton', LvButton);
// app.component('LvNotification', LvNotification); // REFACTORING
// app.component('LvToast', LvToast); // REFACTORING
app.component('LvInput', LvInput);

app.mount('#app');
