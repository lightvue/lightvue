<template>
  <div ref="container" :class="containerClass">
    <transition-group name="lv-notification__message" tag="div">
      <NotificationMessage v-for="msg of messages" :key="msg.id" :message="msg" :variant="variant" @close="remove($event)" />
    </transition-group>
  </div>
</template>

<script>
import NotificationEventBus from './NotificationEventBus';
import NotificationMessage from './NotificationMessage.vue';
import { DomHandler } from 'lightvue/utils';

var messageIdx = 0;

export default {
  props: {
    group: {
      type: String,
      default: null,
    },
    autoZIndex: {
      type: Boolean,
      default: true,
    },
    baseZIndex: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      messages: [],
      position: 'top-right',
      variant: 'light',
    };
  },
  mounted() {
    NotificationEventBus.$on('add', message => {
      if (!message.position) {
        message.position = 'top-right';
      } else {
        this.position = message.position;
      }
      this.add(message);
    });
    NotificationEventBus.$on('remove-group', position => {
      if (!message.position) {
        message.position = 'top-right';
      }
      if (this.position === position) {
        this.messages = [];
      }
    });
    NotificationEventBus.$on('remove-all-groups', () => {
      this.messages = [];
    });
    NotificationEventBus.$on('set', defaultConfig => {
      this.position = defaultConfig.position;
      if (defaultConfig.variant) {
        this.variant = defaultConfig.variant;
      }
    });
    this.updateZIndex();
  },
  beforeUpdate() {
    this.updateZIndex();
  },
  methods: {
    add(message) {
      if (message.id == null) {
        message.id = messageIdx++;
      }
      this.messages = [...this.messages, message];
    },
    remove(message) {
      let index = -1;
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i] === message) {
          index = i;
          break;
        }
      }
      this.messages.splice(index, 1);
    },
    updateZIndex() {
      if (this.autoZIndex) {
        this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
      }
    },
  },
  components: {
    NotificationMessage: NotificationMessage,
  },
  computed: {
    containerClass() {
      return 'lv-notification lv-component --' + this.position;
    },
  },
};
</script>

<style lang="scss">
@import './Notification.scss';
@import './NotificationCore.scss';
</style>
