<template>
  <div ref="container" :class="containerClass">
    <transition-group name="lv-toast__message" tag="div">
      <ToastMessage v-for="msg of messages" :key="msg.id" :message="msg" @close="remove($event)" />
    </transition-group>
  </div>
</template>
<script>
import ToastEventBus from './ToastEventBus';
import ToastMessage from './ToastMessage';
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
      if (!message.position) {
        message.position = 'top';
      }
      if (this.position == message.position) {
        this.add(message);
      }
    });
    ToastEventBus.$on('remove-group', position => {
      if (!position) {
        position = 'top';
      }
      if (this.position === position) {
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
      return 'lv-toast lv-component --' + this.position;
    },
  },
};
</script>

<style lang="scss">
@import './Toast.scss';
@import './ToastCore.scss';
</style>
