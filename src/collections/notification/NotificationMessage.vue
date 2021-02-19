<template>
  <div :class="containerClass" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="lv-notification-message-content">
      <!-- <span :class="iconClass"></span> -->
      <div class="lv-notification-message-text">
        <span class="lv-notification-summary">{{ message.summary }}</span>
        <div class="lv-notification-detail">{{ message.detail }}</div>
      </div>
      <!-- <button class="lv-notification-icon-close p-link" @click="onCloseClick" v-if="message.closable !== false" type="button" v-ripple> -->
      <!-- <span class="lv-notification-icon-close-icon light-icon-x"></span> -->
      <!-- </button> -->
    </div>
  </div>
</template>

<script>
import Ripple from '@/collections/ripple/Ripple';

export default {
  props: {
    message: null,
  },
  closeTimeout: null,
  mounted() {
    if (this.message.life) {
      this.closeTimeout = setTimeout(() => {
        this.close();
      }, this.message.life);
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
        'lv-notification-message',
        {
          'lv-notification-message-info': this.message.severity === 'info',
          'lv-notification-message-warn': this.message.severity === 'warn',
          'lv-notification-message-error': this.message.severity === 'error',
          'lv-notification-message-success': this.message.severity === 'success',
        },
      ];
    },
    // iconClass() {
    //   return [
    //     'lv-notification-message-icon pi',
    //     {
    //       'pi-info-circle': this.message.severity === 'info',
    //       'pi-exclamation-triangle': this.message.severity === 'warn',
    //       'pi-times': this.message.severity === 'error',
    //       'pi-check': this.message.severity === 'success',
    //     },
    //   ];
    // },
  },
  directives: {
    ripple: Ripple,
  },
};
</script>
