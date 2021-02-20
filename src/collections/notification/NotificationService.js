import NotificationEventBus from './NotificationEventBus';

const NotificationService = {
  install: Vue => {
    Vue.prototype.$notification = {
      add: message => {
        NotificationEventBus.$emit('add', message);
      },
      removeGroup: group => {
        NotificationEventBus.$emit('remove-group', group);
      },
      removeAllGroups: () => {
        NotificationEventBus.$emit('remove-all-groups');
      },
    };
  },
};

export default NotificationService;
