<template>
  <div class="tour_wrapper">
    <LvButton label="Start the Demo" class="lv--secondary" icon="light-icon-click" @click.stop="toggleVisibility"></LvButton>

    <!-- <div v-for="(step, stepIndex) in steps" :key="stepIndex"> -->
      <LvPopOver  v-model="visibility" :placement="activeStep.placement" :target="activeStep.target" :backgroundColor="activeStep.background" maxWidth="250px">
        <div>
          {{ activeStep.target }}
          step no-{{ activeStep.id }} {{ currentStep }}-currentStep
          <p v-html="activeStep.title"></p>
          <p v-html="activeStep.description"></p>
          Condition-{{ activeStep.id == currentStep }} target-{{ activeStep.target }} placement-{{ activeStep.placement }}
          <!-- <div>
            <LvButton @click.stop="previousStep" class="lv--primary">Back</LvButton>
            <LvButton @click.stop="nextStep" class="lv--primary">Next</LvButton>
          </div> -->
          <slot name="button" :previousStep="previousStep" :nextStep="nextStep"></slot>
        </div>
      </LvPopOver>
    </div>
  </div>
</template>

<script>
import LvPopOver from 'lightvue/popover';

export default {
  name: 'LvTour',
  components: { LvPopOver },
  props: {
    steps: {
      type: Array,
      default: () => [],
    },
    // currentStep: {
    //   type: Number,
    //   default: 0,
    // },
  },
  // created() {
  //   this.$emit('nextStep');
  // },
  data() {
    return {
      currentStep: 0,
      // activeStep: null,
      visibility: false,
    };
  },
  computed: {
    numberOfSteps() {
      return this.steps.length;
    },
    activeStep() {
      return this.steps[this.currentStep];
    },
  },
  methods: {
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
    nextStep() {
      if (this.currentStep < this.numberOfSteps) {
        this.currentStep++;
        // this.visibility = false;
        // setTimeout(() => {
        //   this.visibility = true;
        // }, 1000);
        // this.visibility = true;
        console.log('Component Next Step', this.currentStep);
      } else {
        alert('Last Step');
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        console.log('Component Previous step', this.currentStep);
      } else {
        alert('No Previous Step');
      }
    },
  },
};
</script>

<style  scoped>
</style>