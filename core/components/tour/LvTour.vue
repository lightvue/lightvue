<template>
  <div class="tour_wrapper">
    <LvButton label="Start the Demo" class="lv--secondary" icon="light-icon-click" @click.stop="toggleVisibility"></LvButton>

    <div v-for="step in steps" :key="step.id">
      <LvPopOver v-if="step.id == currentStep" v-model="visibility" :placement="step.placement" :target="step.target" :backgroundColor="step.background" maxWidth="250px">
        <div>
          {{ step.target }}
          step no-{{ step.id }} {{ currentStep }}-currentStep
          <p v-html="step.title"></p>
          <p v-html="step.description"></p>
          Condition-{{ step.id == currentStep }} target-{{ step.target }} placement-{{ step.placement }}
          <div style="text-align: center">
            <LvButton @click.stop="previousStep" class="lv--primary">Back</LvButton>
            <LvButton @click.stop="nextStep" class="lv--primary">Next</LvButton>
          </div>
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
  data() {
    return {
      currentStep: 1,
      visibility: false,
    };
  },
  computed: {
    numberOfSteps() {
      return this.steps.length;
    },
    step() {
      return this.steps[this.currentStep], console.log('pushed in step', this.currentStep);
    },
  },
  methods: {
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
    nextStep() {
      if (this.currentStep < this.numberOfSteps) {
        this.currentStep++;
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