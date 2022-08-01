<template>
  <div class="tourDemo">
    <LvTour :steps="demoList">
      <template #content>
        <div>
          {{ listStep }}
          <p v-html="demoList[listStep].title"></p>
        </div>
        <div style="text-align: center; color: #263846; width: 200px; margin-top: 10px">
          <p v-html="demoList[listStep].description"></p>
        </div>
      </template>
      <template #button>
        <div class="footer">
          <LvButton @click.stop="previousStep" label="back" icon="light-icon-chevrons-left" outlined class="lv--info" style="width: 49%" />
          <LvButton @click.stop="nextStep" label="next" icon-right="light-icon-chevrons-right" class="lv--info" style="height: 32.8px; width: 49%" />
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
      listStep: 1,

      demoList: [
        {
          id: '1',
          background: '#ddd',
          target: '.header-logo',
          placement: 'bottom',
          title: `<a href="https://lightvue.org/"><img src="/logo_v2.svg" class="header-logo"/></a>`,
          description: `<p>The Emerging UI Component Library Designed for Vue 3.x & Vue 2.x</p>`,
        },
        {
          id: '2',
          target: '.light-icon-chevron-down',
          placement: 'bottom',
          title: '<h6>Progress Bar</h6>',
          description: '<p>Progress Bar component can be used as a process status indicator for a time-consuming process.</p>',
        },
        {
          id: '3',
          target: '.right-sidebar',
          placement: 'left',
          title: '<h6>Progress Spinners</h6>',
          description: '<p>Progress spinner components can be used as a loading animations or space-fillers while waiting for the actual content to load.</p>',
        },
        {
          id: '4',
          target: '.documentation-link',
          placement: 'bottom',
          title: '<h5>HTML Embedded</h5>',
          description: '<p>tooltip content <u>inline HTML, images, iframe, videos, maps Through templates, </u>. A title can be added to the content can be loaded with</p>',
        },
        {
          id: '5',
          target: '#setup',
          placement: 'top',
          title: '<h6>Switch</h6>',
          description: '<p>You can switch between LightVue 3.x & Vue 2.x from here.</p>',
        },
      ],
    };
  },
  methods: {
    nextStep() {
      if (this.listStep < this.demoList.length) {
        this.listStep++;
        console.log('Demo Next Step', this.listStep);
      }
    },
    previousStep() {
      if (this.listStep >= 1) {
        this.listStep--;
        console.log('Demo Previous step', this.listStep);
      }
    },
  },
};
</script>

