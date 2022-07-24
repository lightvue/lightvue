<template>
  <div class="tour_wrapper">
    <!-- <slot :current-step="currentStep" :steps="steps" :previous-step="previousStep" :next-step="nextStep" :stop="stop" :skip="skip">
      <LvTourStep v-if="steps[currentStep]" :step="steps[currentStep]" :key="currentStep" :previous-step="previousStep" :next-step="nextStep" :stop="stop" :skip="skip"> </LvTourStep>
    </slot> -->
    <div v-if="currentStep == 0">
      <LvPopOver placement="bottom" target=".header-logo">
        <template #anchor>
          <LvButton label="Start the Demo" class="lv--secondary" icon="light-icon-click"></LvButton>
        </template>
        <div>
          <div>
            <a href="https://lightvue.org/">
              <img src="/logo_v2.svg" class="header-logo" />
            </a>
          </div>

          <div style="text-align: center; color: #263846; width: 250px; margin-top: 10px">
            <p>The Emerging UI Component Library Designed for Vue 3.x & Vue 2.x</p>
          </div>
          <div style="text-align: center">
            <LvButton @click="previousStep" class="lv--success">previousStep</LvButton>
            <LvButton @click="nextStep" class="lv--success">nextStep</LvButton>
          </div>
        </div>
      </LvPopOver>
    </div>
    <div v-if="currentStep == 1">
      <LvPopOver placement="top" backgroundColor="#fff" target=".documentation-link">
        <template #anchor>
          <LvButton label="Second Step" class="lv--primary" />
        </template>
        <div style="width: 250px">
          <div class="header" style="color: #0d2131">
            <h5>PopOver</h5>
          </div>
          <div class="body" style="color: #0d2131">
            <p>The Popover component is similar to tooltips; it is a pop-up box that appears when the user clicks on an element. The difference is that the popover can contain much more content.</p>
          </div>
          <div class="footer">
            <LvButton label="Back" @click="previousStep" icon="light-icon-chevrons-left" outlined class="lv--info" style="width: 49%" />
            <LvButton label="Next" @click="nextStep" icon-right="light-icon-chevrons-right" class="lv--info" style="height: 32.8px; width: 49%" />
          </div>
        </div>
      </LvPopOver>
    </div>
    <div v-if="currentStep == 2">
      <LvPopOver :offset="10" placement="bottom" target=".light-icon-chevron-down" backgroundColor="#CEC9C9">
        <template #anchor>
          <LvButton label="Third Step" class="lv--primary" />
        </template>
        <p>You can switch between LightVue 3.x & Vue 2.x from here.</p>
        <LvButton label="Back" @click="previousStep" class="lv--primary" />
        <LvButton label="Next" @click="nextStep" class="lv--primary" />
      </LvPopOver>
    </div>
    <!-- {{ steps[currentStep] }}
    {{ currentStep }}
     -->
  </div>
</template>

<script>
import LvTourStep from 'lightvue/tour/LvTourStep.vue';
import LvPopOver from 'lightvue/popover';

import { DEFAULT_CALLBACKS, DEFAULT_OPTIONS, KEYS } from './shared/constants';
export default {
  name: 'LvTour',
  components: { LvTourStep, LvPopOver },
  props: {
    steps: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentStep: 0,
    };
  },
  computed: {
    // Return true if the tour is active, which means that there's a VStep displayed
    // isRunning () {
    //   return this.currentStep > -1 && this.currentStep < this.numberOfSteps
    // },
    // isFirst () {
    //   return this.currentStep === 0
    // },
    // isLast () {
    //   return this.currentStep === this.steps.length - 1
    // },
    numberOfSteps() {
      return this.steps.length;
    },
    step() {
      return this.steps[this.currentStep], console.log('pushed in step', this.currentStep);
    },
  },
  methods: {
    previousStep() {
      if (currentStep >= 0) {
        let futureStep = this.currentStep - 1;
        this.currentStep = futureStep;
        console.log('Previous step', this.currentStep);
      } else {
        console.log('last step');
      }
    },
    nextStep() {
      let futureStep = this.currentStep + 1;
      this.currentStep = futureStep;
      // this.steps.push([this.currentStep]);
      console.log('Next Step', this.currentStep);
      console.log('Step', this.steps);
    },
  },
};
</script>

<style  scoped>
</style>