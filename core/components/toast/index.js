import ToastEventBus from './ToastEventBus';
import LvToast from './Toast.vue';

const lightToast = {
  install: Vue => {
    const plugin = {
      add: message => {
        ToastEventBus.$emit('add', message);
      },
      removeGroup: group => {
        ToastEventBus.$emit('remove-group', group);
      },
      removeAllGroups: () => {
        ToastEventBus.$emit('remove-all-groups');
      },
    };
    if (Vue.prototype) {
      Vue.prototype.$toast = plugin; // Vue 2.x only
    } else {
      Vue.config.globalProperties.$toast = plugin; // Vue 3.x only
    }
    Vue.component('LvToast', LvToast);
  },
};

export default lightToast;
