<template>
  <div>
    <div>
     <lv-button :class="selectedAnimation" class="lv-animate__slide-in" label="Animate Me!" size="xl"/>
    </div>
     <br>
    <div>
     <lv-dropdown label="Select Animation" v-model="selectedAnimation" :options="animationList" option-label="label" option-value="value"></lv-dropdown>
    </div>
    <br>
    <div>
      <p>Class Name : {{this.selectedAnimation}} </p>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import LvButton from "lightvue/button"
import LvDropdown from "lightvue/dropdown"
export default{
name:'AnimationBestDemo',
  data(){
    return {
      selectedAnimation: '',
      animationList: [
        {label:'Fade in', value:"lv-animate__fade-in"},
        {label:'Fade in left', value:"lv-animate__fade-in--left"},
        {label:'Fade in top', value:"lv-animate__fade-in--top"},
        {label:'Fade in right', value:"lv-animate__fade-in--right"},
        {label:'Fade in bottom', value:"lv-animate__fade-in--bottom"},
        {label:'Fade out', value:"lv-animate__fade-out"},
        {label:'Fade out left', value:"lv-animate__fade-out--left"},
        {label:'Fade out top', value:"lv-animate__fade-out--top"},
        {label:'Fade out right', value:"lv-animate__fade-out--right"},
        {label:'Fade out bottom', value:"lv-animate__fade-out--bottom"},
        {label:'Slide in left', value:"lv-animate__slide-in--left"},
        {label:'Slide in top', value:"lv-animate__slide-in-top"},
        {label:'Slide in right', value:"lv-animate__slide-in--right"},
        {label:'Slide in bottom', value:"lv-animate__slide-in--bottom"},
        {label:'Slide out left', value:"lv-animate__slide-out--left"},
        {label:'Slide out top', value:"lv-animate__slide-out--top"},
        {label:'Slide out right', value:"lv-animate__slide-out--right"},
        {label:'Slide out bottom', value:"lv-animate__slide-out--bottom"},
        {label:'Zoom in', value:"lv-animate__zoom-in"},
        {label:'Zoom out', value:"lv-animate__zoom-out"},
        
      ]
    }
  },
  components:{
    LvButton,
    LvDropdown,
  }
}
</script>