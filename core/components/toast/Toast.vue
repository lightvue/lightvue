<template>
  <div ref="container" :class="containerClass">
    <transition-group name="lv-toast-message" tag="div">
      <ToastMessage v-for="msg of messages" :key="msg.id" :message="msg" @close="remove($event)" />
    </transition-group>
  </div>
</template>
<script>
import './Toast.scss';
import ToastEventBus from './ToastEventBus';
import ToastMessage from './ToastMessage';
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
      default: 'top',
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
    ToastEventBus.$on('add', message => {
      if (this.group == message.group) {
        this.add(message);
      }
    });
    ToastEventBus.$on('remove-group', group => {
      if (this.group === group) {
        this.messages = [];
      }
    });
    ToastEventBus.$on('remove-all-groups', () => {
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
    ToastMessage: ToastMessage,
  },
  computed: {
    containerClass() {
      return 'lv-toast lv-component lv-toast-' + this.position;
    },
  },
};
</script>

<style>
.lv-toast {
  position: fixed;
  width: 15rem;
  font-size: 18px;
}

.lv-toast-message-text {
  flex: 1 1 auto;
}

.lv-toast-top {
  top: 20px;
  left: 50%;
  /* margin-left: -10em; */
}

.lv-toast-bottom {
  bottom: 20px;
  left: 50%;
  /* margin-left: -10em;` */
}

.lv-toast-icon-close.lv-link {
  cursor: pointer;
}

/* Animations */
.lv-toast-message-enter {
  opacity: 0;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
}

.lv-toast-message-leave {
  max-height: 1000px;
}

.lv-toast .lv-toast-message.lv-toast-message-leave-to {
  max-height: 0;
  opacity: 0;
  margin-bottom: 0;
  overflow: hidden;
}

.lv-toast-message-enter-active {
  -webkit-transition: transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
}

.lv-toast-message-leave-active {
  -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
  transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
</style>
