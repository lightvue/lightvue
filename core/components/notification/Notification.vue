<template>
  <div ref="container" :class="containerClass">
    <transition-group name="lv-notification__message" tag="div">
      <NotificationMessage v-for="msg of messages" :key="msg.id" :message="msg" @close="remove($event)" />
    </transition-group>
  </div>
</template>

<script>
// import './Notification.scss';
import NotificationEventBus from './NotificationEventBus';
import NotificationMessage from './NotificationMessage';
import DomHandler from 'lightvue/utils/DomHandler';

var messageIdx = 0;

export default {
  props: {
    group: {
      type: String,
      default: null,
    },
    position: {
      type: String,
      default: 'top-right',
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
    };
  },
  mounted() {
    NotificationEventBus.$on('add', message => {
      if (this.group == message.group) {
        this.add(message);
      }
    });
    NotificationEventBus.$on('remove-group', group => {
      if (this.group === group) {
        this.messages = [];
      }
    });
    NotificationEventBus.$on('remove-all-groups', () => {
      this.messages = [];
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
