import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { RouterLink } from 'vue-router';

import LvButton from 'lightvue/button';

const app = createApp(App).use(store).use(router);

app.component('NuxtLink', RouterLink);
app.component('LvButton', LvButton);

// app.component(nuxt-link: )
app.$lightvue = { ripple: true };

app.mount('#app');
