<template>
  <div class="copy-btn__wrap">
    <div class="copy-btn" @click="copy">
      <i class="light-icon-copy"></i>
    </div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div v-show="copied" class="copy-btn__tag"><i class="light-icon-circle-check" /> Copied to clipboard</div>
    </transition>
  </div>
</template>

<script>
import { copyToClipboard } from '../../utils';
export default {
  props: {
    text: [Function, String],
  },
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copy() {
      const text = typeof this.text === 'function' ? this.text() : this.text;
      copyToClipboard(text)
        .then(() => {
          this.copied = true;
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.copied = false;
            this.timer = null;
          }, 1000);
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.copy-btn__wrap {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;

  // position: sticky;
  // top: 16px;
  // display: flex;
  // justify-content: flex-end;
  // padding-right: 16px;
}

.copy-btn i {
  color: #566d79;
  padding: 5px;
  font-size: 32px;
  font-weight: bold;
  border-radius: 50%;
  background-color: #d6dfe8;
  transition: all 0.5s ease-out;
  cursor: pointer;
  opacity: 0.4;
}
.copy-btn:hover i {
  opacity: 0.8;
}
.copy-btn__tag {
  position: absolute;
  top: 0px;
  right: 52px;
  font-size: 14px;
  white-space: nowrap;
  background-color: #607b89;
  color: #fff;
  border-radius: 24px;
  padding: 6px 12px 6px 6px;

  display: flex;
  align-items: center;
  i {
    font-size: 20px;
    margin-right: 6px;
  }
}
</style>
