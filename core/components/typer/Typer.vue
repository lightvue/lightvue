<template>
  <span>
    <span class="typed-text">{{ typeValue }}</span>
    <!-- <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span> -->
  </span>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  name: 'LvTyper',
  props: {
    /**
     * Text(s) to type.
     */
    words: {
      type: [String, Array],
      required: true,
      validator(value) {
        if (typeof value === 'string') {
          return value.length > 0;
        }
        return value.every(item => typeof item === 'string' && item.length > 0);
      },
    },
  },
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typingSpeed: 160,
      erasingSpeed: 80,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  computed: {
    typeArray() {
      return this.words;
    },
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length) this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 300);
      }
    },
  },
  created() {
    this.typeValue = this.typeArray[this.typeArrayIndex];
    this.charIndex = this.typeValue.length;
    setTimeout(this.eraseText, this.newTextDelay);
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
span.typed-text {
  color: teal;
}
span.cursor {
  display: inline-block;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
