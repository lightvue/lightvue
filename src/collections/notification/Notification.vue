<template>
  <div ref="container" :class="containerClass">
    <transition-group name="lv-notification-message" tag="div">
      <NotificationMessage v-for="msg of messages" :key="msg.id" :message="msg" @close="remove($event)" />
    </transition-group>
  </div>
</template>

<script>
import './Notification.scss';
import NotificationEventBus from './NotificationEventBus';
import NotificationMessage from './NotificationMessage';
import DomHandler from '@/utils/DomHandler';

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
      return 'lv-notification p-component lv-notification-' + this.position;
    },
  },
};
</script>

<style>
.lv-notification {
  position: fixed;
  width: 25rem;
}

.lv-notification-message-content {
  display: flex;
  align-items: flex-start;
}

.lv-notification-message-text {
  flex: 1 1 auto;
}

.lv-notification-top-right {
  top: 20px;
  right: 20px;
}

.lv-notification-top-left {
  top: 20px;
  left: 20px;
}

.lv-notification-bottom-left {
  bottom: 20px;
  left: 20px;
}

.lv-notification-bottom-right {
  bottom: 20px;
  right: 20px;
}

.lv-notification-top-center {
  top: 20px;
  left: 50%;
  margin-left: -10em;
}

.lv-notification-bottom-center {
  bottom: 20px;
  left: 50%;
  margin-left: -10em;
}

.lv-notification-center {
  left: 50%;
  top: 50%;
  min-width: 20vw;
  transform: translate(-50%, -50%);
}

.lv-notification-icon-close {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.lv-notification-icon-close.p-link {
  cursor: pointer;
}

/* Animations */
.lv-notification-message-enter {
  opacity: 0;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
}

.lv-notification-message-leave {
  max-height: 1000px;
}

.lv-notification .lv-notification-message.lv-notification-message-leave-to {
  max-height: 0;
  opacity: 0;
  margin-bottom: 0;
  overflow: hidden;
}

.lv-notification-message-enter-active {
  -webkit-transition: transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
}

.lv-notification-message-leave-active {
  -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
  transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
</style>
