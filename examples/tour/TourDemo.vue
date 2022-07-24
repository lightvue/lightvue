<template>
  <div>
    <!--<div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div>
    <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div>
    <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div>
    <LvTour :steps="steps">
      <template v-slot:header>
        <LvButton label="Second" class="lv--success" icon="light-icon-click" />
      </template>

      <template v-slot:content>
        <div>
          <p>Switch between vue 2x and vue 3x.</p>
        </div>
      </template> -->
    <LvTour></LvTour>
  </div>
</template>

<script>
import LvPopOver from 'lightvue/popover';
import LvTour from 'lightvue/tour';
export default {
  components: {
    LvPopOver,
    LvTour,
  },
  props: {},
  data() {
    return {
      steps: [
        {
          id: 'first tour',
          title: `<a href="https://lightvue.org/"><img src="/logo_v2.svg" class="header-logo"/></a>`,
          description: `<p>The Emerging UI Component Library Designed for Vue 3.x & Vue 2.x</p>`,
        },
        {
          id: 'second tour',
          title: 'second title',
          description: 'second description',
        },
      ],
    };
  },
};
</script>

