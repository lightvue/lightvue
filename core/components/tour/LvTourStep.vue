<template>
  <div v-bind:class="{ 'v-step--sticky': isSticky }" class="v-step" :id="'v-step-' + hash" :ref="'v-step-' + hash">
    <slot>
      <LvPopOver>
        <template #anchor>
          <slot name="header"></slot>
          <!-- <template v-slot:header> -->
          <LvButton label="Second" class="lv--success" icon="light-icon-click" />
          <!-- </template> -->

          <!-- <template v-slot:content> -->
          <div>
            <p>Switch between vue 2x and vue 3x.</p>
          </div>
          <!-- </template> -->
        </template>
        <slot name="content"></slot>
      </LvPopOver>
    </slot>
    <slot name="actions">
      <div class="v-step__buttons">
        <button @click="skip" class="v-step__button v-step__button-skip">skip</button>
        <button @click="previousStep" class="v-step__button v-step__button-previous">previousStep</button>
        <button @click="nextStep" class="v-step__button v-step__button-next">nextStep</button>
        <button @click="finish" class="v-step__button v-step__button-stop">finish</button>
      </div>
    </slot>
  </div>
</template>

<script>
import { DEFAULT_CALLBACKS, DEFAULT_OPTIONS, KEYS } from './shared/constants';
import jump from 'jump.js';
import sum from 'hash-sum';
import LvPopOver from 'lightvue/popover';

export default {
  name: 'LvTourStep',
  components: { LvPopOver },
  props: {
    step: {
      type: Object,
    },
    previousStep: {
      type: Function,
    },
    nextStep: {
      type: Function,
    },
    stop: {
      type: Function,
    },
    skip: {
      type: Function,
      default: function () {
        this.stop();
      },
    },
  },
  data() {
    return {
      hash: sum(this.step.target),
      targetElement: document.querySelector(this.step.target),
    };
  },
  computed: {
    params() {
      return {
        ...DEFAULT_STEP_OPTIONS,
        // ...{ highlight: this.highlight }, // Use global tour highlight setting first
        // ...{ enabledButtons: Object.assign({}, this.enabledButtons) },
        ...this.step.params, // Then use local step parameters if defined
      };
    },
    /**
     * A step is considered sticky if it has no target.
     */
    isSticky() {
      return !this.step.target;
    },
  },
  methods: {
    createStep() {
      if (this.debug) {
        console.log('[Vue Tour] The target element ' + this.step.target + ' of .v-step[id="' + this.hash + '"] is:', this.targetElement);
      }
      if (this.isSticky) {
        document.body.appendChild(this.$refs['v-step-' + this.hash]);
      } else {
        if (this.debug) {
          console.error('[Vue Tour] The target element ' + this.step.target + ' of .v-step[id="' + this.hash + '"] does not exist!');
        }
        this.$emit('targetNotFound', this.step);
        if (this.stopOnFail) {
          this.stop();
        }
      }
    },
    enableScrolling() {
      if (this.params.enableScrolling) {
        if (this.step.duration || this.step.offset) {
          let jumpOptions = {
            duration: this.step.duration || 1000,
            offset: this.step.offset || 0,
            callback: undefined,
            a11y: false,
          };
          jump(this.targetElement, jumpOptions);
        } else {
          // Use the native scroll by default if no scroll options has been defined
          this.targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    isButtonEnabled(name) {
      return this.params.enabledButtons.hasOwnProperty(name) ? this.params.enabledButtons[name] : true;
    },
  },
  mounted() {
    this.createStep();
  },
};
</script>

<style lang="scss" scoped>
</style>