<template>
  <div role="progressbar" :class="containerClass" aria-valuemin="0" :aria-valuenow="value" aria-valuemax="100">
    <div v-if="determinate" class="lv-progressbar__value lv-progressbar__value--animate" :style="progressStyle"></div>
    <div v-if="determinate && value && showValue" class="lv-progressbar--determinate__label">{{ value + '%' }}</div>
    <div v-if="indeterminate" class="lv-progressbar--indeterminate-container">
      <div class="lv-progressbar__value lv-progressbar__value--animate" :style="indeterminateColor"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LvProgressbar',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#607c8a',
    },
    mode: {
      type: String,
      default: 'determinate',
    },
    showValue: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    containerClass() {
      return [
        'lv-progressbar lv-component',
        {
          'lv-progressbar--determinate': this.determinate,
          'lv-progressbar--indeterminate': this.indeterminate,
        },
      ];
    },
    progressStyle() {
      return {
        backgroundColor: this.color,
        width: this.value + '%',
        display: 'block',
      };
    },
    indeterminateColor() {
      return {
        backgroundColor: this.color,
      };
    },
    indeterminate() {
      return this.mode === 'indeterminate';
    },
    determinate() {
      return this.mode === 'determinate';
    },
  },
};
</script>

<style>
.lv-progressbar {
  position: relative;
  overflow: hidden;
}
.lv-progressbar {
  height: 0.25rem;
}
.lv-progressbar {
  border: 0 none;
  height: 1.5rem;
  background: var(--input-field-background-color);
  border-radius: 3px;
}

.lv-progressbar .lv-progressbar-value {
  border: 0 none;
  margin: 0;
  background: var(--lv-color-primary);
}

.lv-progressbar .lv-progressbar-label {
  color: #495057;
  line-height: 1.5rem;
}

.lv-progressbar--determinate .lv-progressbar__value {
  height: 100%;
  width: 0%;
  position: absolute;
  display: none;
  border: 0 none;
}

.lv-progressbar--determinate .lv-progressbar__value--animate {
  transition: width 1s ease-in-out;
}

.lv-progressbar--determinate .lv-progressbar--determinate__label {
  text-align: center;
  height: 100%;
  width: 100%;
  position: absolute;
  font-weight: bold;
}

.lv-progressbar--indeterminate {
  height: 0.5em;
}

.lv-progressbar--indeterminate .lv-progressbar__value::before {
  content: '';
  position: absolute;
  background-color: inherit;
  top: 0;
  left: 0;
  bottom: 0;
  will-change: left, right;
  -webkit-animation: lv-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  animation: lv-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.lv-progressbar--indeterminate .lv-progressbar__value::after {
  content: '';
  position: absolute;
  background-color: inherit;
  top: 0;
  left: 0;
  bottom: 0;
  will-change: left, right;
  -webkit-animation: lv-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  animation: lv-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  -webkit-animation-delay: 1.15s;
  animation-delay: 1.15s;
}

@-webkit-keyframes lv-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
}
@keyframes lv-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
}

@-webkit-keyframes lv-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}
@keyframes lv-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}
</style>
