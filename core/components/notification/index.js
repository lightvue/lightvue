import NotificationEventBus from './NotificationEventBus';
import LvNotification from './Notification.vue';

const lightNotification = {
    install: Vue => {
        const plugin = {
            add: message => {
                NotificationEventBus.$emit('add', message);
            },
            removeGroup: position => {
                NotificationEventBus.$emit('remove-group', position);
            },
            removeAllGroups: () => {
                NotificationEventBus.$emit('remove-all-groups');
            },
            set: defaultConfig => {
                NotificationEventBus.$emit('set', defaultConfig);
            },
        };
        if (Vue.prototype) {
            Vue.prototype.$notification = plugin; // Vue 2.x only
        } else {
            Vue.config.globalProperties.$notification = plugin; // Vue 3.x only
        }
        Vue.component('LvNotification', LvNotification);
    },
};

export default lightNotification;
