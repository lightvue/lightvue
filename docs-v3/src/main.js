import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { RouterLink } from 'vue-router';

import LvButton from 'lightvue/button';

const app = createApp(App).use(store).use(router);
app.config.globalProperties.$listeners = '';
app.config.globalProperties.$lightvue = { ripple: true };

app.component('NuxtLink', RouterLink);
app.component('LvButton', LvButton);

// app.component(nuxt-link: )

app.mount('#app');
