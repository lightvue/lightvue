import ToastEventBus from './ToastEventBus';
import LvToast from './Toast.vue';

const lightToast = {
  install: Vue => {
    const plugin = {
      add: message => {
        ToastEventBus.$emit('add', message);
      },
      removeGroup: position => {
        ToastEventBus.$emit('remove-group', position);
      },
      removeAllGroups: () => {
        ToastEventBus.$emit('remove-all-groups');
      },
      set: defaultConfig => {
        ToastEventBus.$emit('set', defaultConfig);
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
