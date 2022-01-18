<template>
    <div>
      <docs-card-best title="Playground">
      <div :class="selectedAnimation">
        <lv-button class="lv-animate__slide-in" label="Animate Me!" size="xl"/>
      </div>
      <br>
      <div>
        <p>Class Name : {{this.selectedAnimation}} </p>
      </div>
      <template #props>
        <lv-dropdown label="Select Animation" v-model="selectedAnimation" :options="animationList" option-label="label" option-value="value"></lv-dropdown>
      </template>
      </docs-card-best>
    </div>
</template>

<script>
import LvButton from "lightvue/button"
import LvDropdown from "lightvue/dropdown"
import DocsCardBest from '@/components/docs-card/DocsCardBest';
export default{
  name:'AnimationBestDemo',
  data(){
    return {
      selectedAnimation: '',
      animationList: [
        {label:'Fade in', value:"lv-animate__fade-in"},
        {label:'Fade out', value:"lv-animate__fade-out"},
        {label:'Slide in', value:"lv-animate__slide-in--left"},
        {label:'Slide out', value:"lv-animate__slide-out--right"},
        {label:'Zoom in', value:"lv-animate__zoom-in"},
        {label:'Zoom out', value:"lv-animate__zoom-out"},
        
      ]
    }
  },
  components:{
    LvButton,
    LvDropdown,
    DocsCardBest
  }
}
</script>
