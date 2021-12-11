<template>
  <div :class="containerClass" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="lv-toast__message-content">
      <!-- <div class="lv-toast__message-text"> -->
      <div class="lv-toast__content">{{ message.content }}</div>
      <!-- </div> -->
      <!-- <button class="lv-notification__icon-close lv-link" @click="onCloseClick" v-if="message.closable !== false" type="button" v-ripple>
        <span class="lv-notification__icon-close-icon light-icon-x"></span>
      </button> -->
    </div>
  </div>
</template>

<script>
import Ripple from 'lightvue/ripple';

export default {
  props: {
    message: null,
  },
  closeTimeout: null,
  mounted() {
    if (this.message.duration) {
      this.closeTimeout = setTimeout(() => {
        this.close();
      }, this.message.duration);
    }
  },
  methods: {
    close() {
      this.$emit('close', this.message);
    },
    onCloseClick() {
      if (this.closeTimeout) {
        clearTimeout(this.closeTimeout);
      }
      this.close();
    },
  },
  computed: {
    containerClass() {
      return [
        'lv-toast__message',
        'lv--primary', //default
        `lv--${this.message.type}`
      ];
    },
  },
  directives: {
    ripple: Ripple,
  },
};
</script>
