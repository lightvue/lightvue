<template>
    <div>
      <docs-card-best title="Playground" overflow>
        <lv-animate :name="selectedAnimation">
          <lv-button label="Animate Me!" size="xl"/>
        </lv-animate>
      <template #props>
        <lv-dropdown label="Select Animation" v-model="selectedAnimation" :options="animationList"></lv-dropdown>
      </template>
      </docs-card-best>
    </div>
</template>

<script>
import LvButton from "lightvue/button"
import LvDropdown from "lightvue/dropdown"
import DocsCardBest from '@/components/docs-card/DocsCardBest';
import LvAnimate from 'lightvue/animate'
export default{
  name:'AnimationBestDemo',
  data(){
    return {
      selectedAnimation: '',
      animationList: [
       // Fade ins
      'fadeIn',
      'fadeInLeft',
      'fadeInRight',
      'fadeInTop',
      'fadeInBottom',
      // Fade outs
      'fadeOut',
      'fadeOutLeft',
      'fadeOutRight',
      'fadeOutTop',
      'fadeOutBottom',
      // Slide ins 
      'slideInLeft',
      'slideInRight',
      'slideInTop',
      'slideInBottom',

      // Slide outs
      'slideOutLeft',
      'slideOutRight', 
      'slideOutTop',
      'slideOutBottom',
      //Zoom
      'zoomIn',
      'zoomOut' 
      ]
    }
  },
  watch:{
    selectedAnimation(newValue){
      console.log(newValue)
    }
  },

  components:{
    LvButton,
    LvDropdown,
    DocsCardBest,
    LvAnimate
  }
}
</script>
