<template>
  <div class="tourDemo">
    <LvTour :steps="stepList">
      <template v-slot:header="{ toggleVisibility }">
        <div class="tourDemo">
          <LvButton label="Start the Demo" class="lv--secondary" icon="light-icon-click" @click="toggleVisibility"></LvButton>
        </div>
      </template>
      <!-- <template #content>
        <div>
          {{ listStep }}
          <p v-html="stepList[listStep].title"></p>
        </div>
        <div style="text-align: center; color: #263846; width: 200px; margin-top: 10px">
          <p v-html="stepList[listStep].description"></p>
        </div>
      </template>-->
      <template v-slot:button="{ previousStep, nextStep }">
        <div style="text-align: center">
          <LvButton @click.stop="previousStep" class="lv--success">previousStep</LvButton>
          <LvButton @click.stop="nextStep" class="lv--success">nextStep</LvButton>
        </div>
      </template>
    </LvTour>
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
  props: [],
  data() {
    return {
      stepList: [
        {
          // id: '1',
          background: '#ddd',
          target: '.tourDemo',
          placement: 'bottom',
          title: `<h4 style="text-align: center;">LightVue Tour</h4>`,
          description: `<p>Introduce LightVue Tour to your product by walking them through it step by step.</p>`,
        },
        {
          // id: '2',
          background: '#ddd',
          target: '.nav-list__category',
          placement: 'right',
          title: '<h6>A super simple setup</h6>',
          description: '<p>Easy is better, right? The tour is up and running with just a few options and steps.</p>',
        },
        {
          // id: '3',
          background: '#ddd',
          target: '.social__row',
          placement: 'bottom',
          title: `<h6>Best of all, it's free!</h6>`,
          description: `<p>Yeah! Free as in beer... or speech. Use and abuse, but don't forget to contribute!</p>`,
        },
        // {
        //   id: '4',
        //   target: '.documentation-link',
        //   placement: 'bottom',
        //   title: '<h5>HTML Embedded</h5>',
        //   description: '<p>tooltip content <u>inline HTML, images, iframe, videos, maps Through templates, </u>. A title can be added to the content can be loaded with</p>',
        // },
        // {
        //   id: '5',
        //   target: '#setup',
        //   placement: 'top',
        //   title: '<h6>Switch</h6>',
        //   description: '<p>You can switch between LightVue 3.x & Vue 2.x from here.</p>',
        // },
      ],
    };
  },
};
</script>

